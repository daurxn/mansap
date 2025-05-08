import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { TagsModule } from './tags/tags.module';
import { LocationsModule } from './locations/locations.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'static'),
      serveRoot: '/',
      exclude: ['/api*'],
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    JobsModule,
    TagsModule,
    LocationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
