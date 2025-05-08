import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Role } from 'src/auth/enums/role.enum';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JobsService } from './jobs.service';
import { AuthenticatedRequest } from 'src/auth/interfaces/authenticated-request.interface';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @Roles(Role.USER)
  @UseGuards(AuthGuard, RoleGuard)
  create(
    @Body() createJobDto: CreateJobDto,
    @Request() req: AuthenticatedRequest,
  ) {
    return this.jobsService.create(createJobDto, req.user.id);
  }

  @Get()
  findAll(@Query('search') search?: string) {
    return this.jobsService.findAll(search);
  }

  @Get('mine')
  @UseGuards(AuthGuard)
  findPostedByMe(@Request() req: AuthenticatedRequest) {
    return this.jobsService.findByPostedById(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
    return this.jobsService.update(+id, updateJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobsService.remove(+id);
  }
}
