import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon {
    @Prop({required: true})
    name: string
    @Prop({required: true})
    type: string
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon)

export type PokemonDocument = Pokemon & Document