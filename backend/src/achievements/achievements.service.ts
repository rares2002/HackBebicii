import { Injectable } from '@nestjs/common';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AchievementsService {
  constructor(private readonly prisma: PrismaService) { }
  
  create(createAchievementDto: CreateAchievementDto) {
    return this.prisma.achievement.create({
      data: {
         ...createAchievementDto
      }
    });
  }

  findAll() {
    return this.prisma.achievement.findMany();
  }

  findMy(id: number) {
    return this.prisma.achievementOnUser.findMany({
      where: {
        user_id: id
      },
      include: {
        achievement: true
      }
    });
  }

  earnAchievement(userId: number, achievementId: number) {
    return this.prisma.achievementOnUser.create({
      data: {
        user_id: userId,
        achievement_id: achievementId
      }
    })
   }
}
