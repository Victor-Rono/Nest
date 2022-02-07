import { User } from './../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: User[]  = [
        { id: 1, name: 'Victor' },
        { id: 2, name: 'Brenda' },
        { id: 3, name: 'Jude' },
      ];

      getUsers(): User[] {
          return this.users;
      }

      getUser(id: number) :User{
          return this.users.find(user=> user.id === id);
      }

      removeUser(id: number) :User []{
        return this.users.filter(user=> user.id != id);
    } 

      createUser(createUserDto: string) :CreateUserDto[]{

         const newUser ={
            id: Date.now(),
            name: createUserDto
         }   

          this.users.push(newUser);
          return this.users;       
      }
}
