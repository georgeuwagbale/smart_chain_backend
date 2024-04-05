import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      url : 'postgresql://postgres:eCyEWRlkeQHVaAErroJpheWnsMaFTMZG@roundhouse.proxy.rlwy.net:17886/railway',
      host: 'roundhouse.proxy.rlwy.net',
      type: 'postgres',
      entities: ['dist/modules/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
