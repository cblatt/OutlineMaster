import { Injectable } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  //Do this constructor at the top of every service .
  constructor(private prisma: PrismaService) {}

  //Creates comment
  create(createCommentDto: CreateCommentDto) {
    return this.prisma.comments.create({ data: createCommentDto });
  }

  //Gets all comments
  findAll() {
    return this.prisma.comments.findMany();
  }

  //Get comment for individual course outline
  findOne(commentId: string) {
    return this.prisma.comments.findMany({
      where: {
        commentId: commentId,
      },
    });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
