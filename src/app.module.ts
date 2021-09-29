import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesModule } from './articles/articles.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'task_blog',
    autoLoadEntities: true,
    synchronize: true,
  }), ArticlesModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
