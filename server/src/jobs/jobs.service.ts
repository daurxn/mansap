import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
    return `This action returns a #${id} job`;
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return `This action updates a #${id} job`;
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
