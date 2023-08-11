import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreateGroupInput {
  name: string;
  adminUserId: number;
}

export const createGroup = async ({ name, adminUserId }: CreateGroupInput) => {
  const group = await prisma.group.create({
    data: {
      name,
      users: {
        create: {
          userId: adminUserId,
          isAdmin: true,
        },
      },
    },
  });

  return group;
};

export interface FindGroupInput {
  name?: string;
}

export const findGroups = async ({ name }: FindGroupInput) => {
  const groups = await prisma.group.findMany({
    where: {
      name,
    },
  });

  return groups;
};

interface JoinGroupInput {
  userId: number;
  groupId: number;
  isAdmin: boolean;
}

export const joinGroup = async ({
  userId,
  groupId,
  isAdmin,
}: JoinGroupInput) => {
  const userOnGroup = await prisma.userOnGroup.create({
    data: {
      groupId,
      userId,
      isAdmin,
    },
  });

  return userOnGroup;
};
