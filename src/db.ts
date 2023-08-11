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

interface CreateGroupInput {
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

interface FindGroupInput {
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

interface FindRecruitMentsInput {
  name: string;
  groupId: number;
}

export const findRecruitMents = async ({
  name,
  groupId,
}: FindRecruitMentsInput) => {
  const recruitments = prisma.recruitment.findMany({
    where: {
      name,
      groupId,
    },
  });

  return recruitments;
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
