import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      password: 'my_password',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'my_user',
      database: 'my_database',
      entities: ['dist/**/*.entities{.ts,.js}'],
      synchronize: true,
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
