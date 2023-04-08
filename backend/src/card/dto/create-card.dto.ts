import { IsString, IsInt } from "class-validator";
export class CreateCardDto {
    @IsString()
    number: string;

    @IsInt()
    exp_month: number;

    @IsInt()
    exp_year: number;

    @IsInt()
    cvc: string
}
