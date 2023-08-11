import { Injectable } from '@nestjs/common';
import { createRecruitment } from '../db/db';
import { CreateRecruitmentInput } from '../db/recruitment'

@Injectable()
export class RecruitmentService {
    createRecruitment(Recruitmen: CreateRecruitmentInput) {
        return createRecruitment(Recruitmen)
    }
}
