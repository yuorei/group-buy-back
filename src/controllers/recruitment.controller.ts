import {
    Body,
    Controller,
    Post,
    Get,
    Request,
    UseGuards
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { RecruitmentService } from '../service/recruitment.service';
import { CreateRecruitmentBody, FindRecruitmentsBody } from '../entity/recruitment.entity';

@Controller("item")
export class RecruitmentController {
    constructor(private readonly recruitmentService: RecruitmentService) { }

    @UseGuards(AuthGuard)
    @Post()
    createRecruitment(@Body() recruitment: CreateRecruitmentBody, @Request() req) {
        let user_id = Number(req.user.sub)
        return this.recruitmentService.createRecruitment({
            userId: user_id,
            ...recruitment
        });
    }

    @Get()
    getRecruitment(@Body() recruitment: FindRecruitmentsBody,) {
        return this.recruitmentService.getRecruitment(recruitment.name, recruitment.groupId)
    };
}

