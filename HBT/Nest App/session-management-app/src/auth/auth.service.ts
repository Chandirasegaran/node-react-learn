// auth.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './user.entity'; // Assuming you have a User entity

@Injectable()
export class AuthService {
  private users: User[] = [
    { id: 1, username: 'john', password: '123' },
    { id: 2, username: 'jane', password: 'secret456' },
  ];

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );
    return user || null;
  }

  async createSession(req, user: User) {
    req.session.user = user;
    await req.session.save();
  }

  async destroySession(req) {
    await req.session.destroy();
  }
}