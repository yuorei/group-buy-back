import { Module } from '@nestjs/common';
import { RecruitmentService } from '../service/recruitment.service';
import { RecruitmentController } from 'src/controllers/recruitment.controller';
@Module({
    controllers: [RecruitmentController],
    providers: [RecruitmentService],
    exports: [RecruitmentService],
})
export class RecruitmentModule { }
