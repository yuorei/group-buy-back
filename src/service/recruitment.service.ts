import { Injectable } from '@nestjs/common';
import { createRecruitment, findRecruitments } from '../db/db';
import { CreateRecruitmentInput } from '../db/recruitment'

@Injectable()
export class RecruitmentService {
    createRecruitment(Recruitmen: CreateRecruitmentInput) {
        return createRecruitment(Recruitmen)
    }

    getRecruitment(name: string, groupId: number) {
        return findRecruitments({ name, groupId })
    }
}
