import {
    Body,
    Controller,
    Post,
    Request,
    UseGuards
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { RecruitmentService } from '../service/recruitment.service';
import { CreateRecruitmentBody } from '../entity/recruitment.entity';

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

}
