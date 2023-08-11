import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
