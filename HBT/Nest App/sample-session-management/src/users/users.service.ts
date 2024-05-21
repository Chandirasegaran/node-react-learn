// src/users/users.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    { id: 1, username: 'john', password: 'changeme' },
    { id: 2, username: 'chris', password: 'secret' },
    { id: 3, username: 'maria', password: 'guess' },
  ];

  async findOne(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  }

  async findById(id: number): Promise<any> {
    return this.users.find(user => user.id === id);
  }
}
