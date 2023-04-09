import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { UserGuard } from 'src/auth/guards/user.guard';

@Controller('achievements')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @Post("create")
  create(@Body() createAchievementDto: CreateAchievementDto) {
    return this.achievementsService.create(createAchievementDto);
  }

  @Get()
  findAll() {
    return this.achievementsService.findAll();
  }

  @Get('my-achievements')
  @Auth()
  findMy(@UserGuard() user: any) {
    console.log(user)
    return this.achievementsService.findMy(user);
  }

  @Post('earn')
  earnAchievement(@Body('userId') userId: number, @Body('achievementId') achievementId: number) {
    return this.achievementsService.earnAchievement(userId, achievementId);
  }
}
