import { Injectable } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  //Do this constructor at the top of every service .
  constructor(private prisma: PrismaService) {}

  create(createCommentDto: CreateCommentDto) {
    return this.prisma.comments.create({ data: createCommentDto });
  }

  findAll() {
    return this.prisma.comments.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
