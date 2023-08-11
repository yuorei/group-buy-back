import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateUserInput {
  name: string;
  displayName: string;
  password: string;
}

export const createUser = async ({
  name,
  displayName,
  password,
}: CreateUserInput) => {
  const user = await prisma.user.create({
    data: {
      name,
      display_name: displayName,
      password,
    },
  });

  return user;
};

interface FindUsersInput {
  id?: number;
  name?: string;
  groupId?: number;
}

export const findUsers = async ({ id, name, groupId }: FindUsersInput) => {
  const user = await prisma.user.findMany({
    where: { id, name, groups: { some: { groupId } } },
  });
  return user;
};
