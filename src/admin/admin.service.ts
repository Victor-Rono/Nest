import { User } from './entities/user.entity';
import { Injectable, Query } from '@nestjs/common';
import { UserDTO } from './dto/User.dto';

@Injectable()
export class AdminService {
  private users: any = [
    {
      id: 1,
      name: 'Victor Rono',
      role: 'Project lead',
      salary: '$500',
    },
    {
      id: 2,
      name: 'Shahrose Khalid',
      role: 'Project Supervisor',
      salary: 'Unknown',
    },
    {
      id: 3,
      name: 'Jude Otenyo',
      role: 'Project Manager',
      salary: 'Unknown',
    },
  ];

  getUsers(): any {
    return this.users;
  }

  getUserId(id: number): any {
    return this.users.find((r) => r.id === id);
  }

  createUser(user: UserDTO): User {
    const newUser = {
      id: Date.now(),
      ...user,
    };

    this.users.push(newUser);
    return newUser;
  }

  searchUser(user: string): User[] {
    return this.users.filter((r) => {
      return r.name == user || r.role == user || r.salary == user;
    });
  }
}
