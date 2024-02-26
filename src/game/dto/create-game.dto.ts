import { IsBoolean, IsDate, IsInt, IsString } from "class-validator";

export class CreateGameDto {

   @IsInt()
    gameNumber: number;
    
   @IsString()
    vsTeam: string;

}
