import { User } from './../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
/* eslint-disable prettier/prettier */
import { UsersService } from './users.service';
import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
      
  }
  @Get()
  getUsers(): User[] {
    return this.userService.getUsers()
  }

@Get('search')
searchUser(@Query('n') n: string) :User {
const result = this.userService.getUser(Number(n));

if(!result){
  throw new NotFoundException()
}

return result;
// return n;
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

  @Post("add")
  addUser(@Body() createUserDto: CreateUserDto) :CreateUserDto[] {
    return this.userService.createUser(createUserDto)  
  }


  @Get('remove/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.removeUser(Number(id))
    
  }
}
