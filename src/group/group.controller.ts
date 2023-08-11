import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { GroupService } from './group.service';
import { CreateGroupInput, FindGroupInput, findGroups } from 'src/db/group';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() input: CreateGroupInput, @Request() req) {
    return this.groupService.create({ ...input, adminUserId: req.user.sub });
  }

  @UseGuards(AuthGuard)
  @Post('join')
  join(@Body() input: { groupId: number }, @Request() req) {
    return this.groupService.join({
      groupId: input.groupId,
      userId: req.user.sub,
      isAdmin: false,
    });
  }

  @Get('')
  findMany(@Query() input: FindGroupInput) {
    return findGroups(input);
  }
}
