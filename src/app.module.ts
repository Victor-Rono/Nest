import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { AboutModule } from './about/about.module';
import { AboutModule } from './about/about.module';
import { AdminModule } from './admin/admin.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [UsersModule, AboutModule, AdminModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
