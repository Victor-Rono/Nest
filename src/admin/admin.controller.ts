import { User } from './entities/user.entity';
import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { UserDTO } from './dto/User.dto';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get()
  getUsers(): User[] {
    return this.adminService.getUsers();
  }

  @Get('search')
  searchUser(@Query('name') name: string): User[] | string {
    const result = this.adminService.searchUser(name);
    if (result.length < 1) {
      return 'Could not find any items with the word ' + name;
    }
  }

  @Get(':id')
  getUserId(@Param('id') id: string): User | string {
    const result = this.adminService.getUserId(Number(id));
    if (!result) {
      return 'UNDEFINED';
    }
    return result;
  }

  @Post('create')
  createUser(@Body() body: UserDTO): User | string {
    if (isNaN(Number(body.salary))) {
      return 'Salary Must be a number';
    }
    return this.adminService.createUser(body);
  }
}
