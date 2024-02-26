import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGameDto, UpdateGameDto } from './dto/index';
import { InjectModel } from '@nestjs/mongoose';
import { Game } from './entities/game.entity';
import { Model } from 'mongoose';

@Injectable()
export class GameService {

  constructor(@InjectModel(Game.name) private gameModel: Model<Game>){}

  async create(createGameDto: CreateGameDto) {
    
    try {
      const { gameNumber, vsTeam } = createGameDto;

      const newGame = new this.gameModel({
        gameNumber,
        vsTeam
      });

      console.log(newGame);
      await newGame.save();
      return newGame;
      
    } catch (error) {
      if(error.code === 11000){
        throw new BadRequestException(` La jornda #${ createGameDto.gameNumber} ya fue registrada!`);
      }
      else {
        throw new BadRequestException(`Bad request! error: ${error}` );
      }
    }

  }

  async findAll() {
    const gameList = await this.gameModel.find();
    return gameList;
  }

  async findOne(gameNumber: number) {
    return await this.gameModel.findOne({ gameNumber });
  }

  async update(gameNumber: number, updateGameDto: UpdateGameDto) {

    const { isWon, runsIn, runsOut } = updateGameDto

    const game = await this.findOne(gameNumber)

    game.isWon = isWon;
    game.runsIn = runsIn;
    game.runsOut = runsOut;

    game.save();

    return game
  }

}
