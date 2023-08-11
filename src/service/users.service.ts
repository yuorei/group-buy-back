
// This should be a real class/interface representing a user entity

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserResult } from '../entity/user.entity'



@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  async findOne(name: string): Promise<UserResult> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          name: name,
        },
      });

      return user;
    } catch (error) {
      console.error('Error retrieving user:', error);
      throw error;
    }
  }
}
