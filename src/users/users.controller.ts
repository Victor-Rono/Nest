import { User } from './../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
/* eslint-disable prettier/prettier */
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
      
  }
  @Get()
  getUsers(): User[] {
    return this.userService.getUsers()
  }

  @Get(':id')
  getUser(@Param('id') id: string) : User | string {

  const res =   this.userService.getUser(Number(id));

   if(res){
       return res;
   } else{
       return "Coud not find the user with id "+ id;
   }
  }

//   @Get('add/:user')
//   createUser(createUserDto: CreateUserDto) {
//     return this.userService.createUser(createUserDto)
//   }

  @Get("add/:user")
  addUser(@Param('user') user: string) :User[] {
    return this.userService.createUser(user)  
  }


  @Get('remove/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.removeUser(Number(id))
    
  }
}
