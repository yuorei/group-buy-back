import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../service/app.service';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from './users.module';
import { RecruitmentModule } from './recruitment.module'
import { GroupModule } from '../group/group.module';

@Module({
  imports: [AuthModule, UsersModule, RecruitmentModule, GroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
