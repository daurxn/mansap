import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateApplicationDto } from './dto/create-application.dto';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  create(createJobDto: CreateJobDto, postedById: number) {
    const newJob = {
      ...createJobDto,
      postedById,
      tags: {
        connectOrCreate: createJobDto.tags?.map((tagName) => ({
          where: { name: tagName },
          create: { name: tagName },
        })),
      },
    };

    return this.prisma.job.create({ data: newJob });
  }

  findAll(search?: string, locationId?: number) {
    // build dynamic where clauses
    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        {
          tags: {
            some: { name: { contains: search, mode: 'insensitive' } },
          },
        },
      ];
    }

    if (locationId) {
      // only return jobs tied to this location
      where.locationId = locationId;
    }

    return this.prisma.job.findMany({
      where: {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
          {
            tags: {
              some: { name: { contains: search, mode: 'insensitive' } },
            },
          },
        ],
      },
      include: {
        postedBy: { select: { email: true, name: true } },
        tags: { select: { name: true } },
        _count: {
          select: {
            applications: true,
          },
        },
      },
    });
  }

  findByPostedById(id: number) {
    return this.prisma.job.findMany({
      where: { postedById: id },
      include: {
        postedBy: { select: { email: true, name: true } },
        tags: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.job.findFirst({
      where: { id },
      include: {
        postedBy: { select: { email: true, name: true } },
        tags: { select: { name: true } },
      },
    });
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    const updatedJob = {
      ...updateJobDto,
      tags: {
        connectOrCreate: updateJobDto.tags?.map((tagName) => ({
          where: { name: tagName },
          create: { name: tagName },
        })),
      },
    };

    return this.prisma.job.update({ where: { id }, data: updatedJob });
  }

  remove(id: number) {
    return this.prisma.job.delete({ where: { id } });
  }

  async createApplication(
    applicantId: number,
    createApplicationDto: CreateApplicationDto,
  ) {
    const { jobId, coverLetter } = createApplicationDto;

    const applicant = await this.prisma.user.findUnique({
      where: { id: applicantId },
    });

    if (!applicant) {
      throw new NotFoundException(
        `Applicant with ID ${applicantId} not found.`,
      );
    }

    const job = await this.prisma.job.findUnique({
      where: { id: jobId },
    });

    if (!job) {
      throw new NotFoundException(`Job with ID ${jobId} not found.`);
    }

    const existingApplication = await this.prisma.application.findFirst({
      where: {
        applicantId: applicantId,
        jobId,
      },
    });

    if (existingApplication) {
      throw new ConflictException(
        `You have already applied for job ID ${jobId}.`,
      );
    }

    const resume = await this.prisma.resume.findUnique({
      where: { userId: applicantId },
    });

    if (resume) {
      try {
        const newApplication = await this.prisma.application.create({
          data: {
            jobId,
            applicantId,
            resumeId: resume.id,
            coverLetter,
          },
          include: {
            job: true,
            applicant: {
              select: { id: true, name: true, email: true },
            },
            resume: true,
          },
        });
        return newApplication;
      } catch (error) {
        // Log the error for debugging
        console.error('Error creating application:', error);
        // Handle potential Prisma errors, e.g., foreign key constraint violations
        // if connect fails for some unexpected reason (though checks above should prevent this)
        throw new ConflictException(
          'Could not create application. Please ensure all provided IDs are valid and try again.',
        );
      }
    }
  }
}
