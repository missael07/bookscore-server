import { PartialType } from '@nestjs/mapped-types';
import { CreateGameDto } from './create-game.dto';
import { IsBoolean, IsInt } from 'class-validator';

export class UpdateGameDto extends PartialType(CreateGameDto) {
    @IsInt()
    runsOut: number;
    
    @IsInt()
    runsIn: number;

    @IsBoolean()
    isWon: boolean;
}
