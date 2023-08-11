// This should be a real class/interface representing a user entity

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import {
  CreateGroupInput,
  FindGroupInput,
  JoinGroupInput,
  createGroup,
  findGroups,
  joinGroup,
} from 'src/db/group';

@Injectable()
export class GroupService {
  private prisma = new PrismaClient();

  async create(input: CreateGroupInput) {
    return await createGroup(input);
  }

  async findMany(input: FindGroupInput) {
    return await findGroups(input);
  }

  async join(input: JoinGroupInput) {
    return await joinGroup(input);
  }
}
