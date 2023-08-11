import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreateRecruitmentInput {
  userId: number;
  groupId?: number;
  name: string;
  description: string;
  maxMember?: number;
  price: number;
  deadline?: Date;
}

export const createRecruitment = async ({
  userId,
  groupId,
  name,
  description,
  maxMember,
  price,
  deadline,
}: CreateRecruitmentInput) => {
  const recruitment = prisma.recruitment.create({
    data: {
      userId,
      groupId,
      name,
      description,
      maxMember,
      price,
      deadline,
    },
  });

  return recruitment;
};

interface FindRecruitmentsInput {
  name: string;
  groupId: number;
}

export const findRecruitments = async ({
  name,
  groupId,
}: FindRecruitmentsInput) => {
  const recruitments = prisma.recruitment.findMany({
    where: {
      name,
      groupId,
    },
  });

  return recruitments;
};
