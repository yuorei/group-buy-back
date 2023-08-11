import { Module } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { UsersController } from 'src/controllers/users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
