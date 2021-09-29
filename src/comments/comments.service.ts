import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {

  constructor(@InjectRepository(Comment) private readonly commentRepository: Repository<Comment>) {}

  create(createCommentDto: CreateCommentDto) {
    return this.commentRepository.save(createCommentDto);

  }

  findAll() {
    return this.commentRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  public async  findByArticleId(id: number) {
    let comments:any =  await this.commentRepository.find({
      where:{
        'article_id': id
      }
    });

    const innerComment = comments.filter((com:any) => com.comment_id != 0);
    const outerComment = comments.filter((com:any) => com.comment_id == 0);
    let finalComments = []
    for (let comt of outerComment){
      const findInnerComs = innerComment.filter(incom => incom.comment_id == comt.id);
      let comObj = {...comt, inner: findInnerComs};
      finalComments.push(comObj);
    }
     console.log({finalComments});
    return finalComments
   // return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
