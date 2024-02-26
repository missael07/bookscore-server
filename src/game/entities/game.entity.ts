import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Game {
    @Prop({unique: true, required: true})
    gameNumber: number;

    @Prop({required: true})
    vsTeam: string;

    @Prop({required: true, default: Date.now})
    dateGame: Date;

    @Prop({required: true, default: 0})
    runsOut: number;

    @Prop({required: true, default: 0})
    runsIn: number;

    @Prop({required: true, default: false})
    isWon: boolean;

}

export const GameSchema = SchemaFactory.createForClass(Game);
