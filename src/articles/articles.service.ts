import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(@InjectRepository(Article) private readonly articlesRepository: Repository<Article>) { }

  create(createArticleDto: CreateArticleDto) {
    return this.articlesRepository.save(createArticleDto);
    //  return 'This action adds a new article';
  }

  public async findAll(): Promise<Article[]> {

    return this.articlesRepository.find();
  }

  public async findOne(id: number): Promise<Article> {
    return this.articlesRepository.findOne({
      where: {
        id: id
      }
    });
  }


  public async findAllWithPagination(skip: number): Promise<Article[]> {

    skip = skip || 0

    return this.articlesRepository.find({
        take: 20,
        skip: skip
      }
    );

   

  }

  public async findOneContent(id: number): Promise<Article> {

    return await this.articlesRepository
      .createQueryBuilder('article')
      .where('article.id = :id', { id })
      .select(['article.content', 'article.id'])
      .getOne();

  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  public async remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
