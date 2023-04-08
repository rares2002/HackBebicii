import { IsString } from "class-validator";
export class CreateAchievementDto {
    @IsString()
    name: string;

    @IsString()
    reward: string;


}
