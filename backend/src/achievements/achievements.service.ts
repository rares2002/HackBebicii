import { Injectable } from '@nestjs/common';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserJwtPayload } from 'src/auth/guards/user.guard';
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

  findMy( user: UserJwtPayload) {
    console.log(user)
    return this.prisma.achievementOnUser.findMany({
      where: {
        user_id: user.id
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
