export interface CreateRecruitmentBody {
    groupId ?: number;
    name: string;
    description: string;
    maxMember ?: number;
    price: number;
    deadline ?: Date;
}