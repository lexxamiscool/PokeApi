import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon, PokemonDocument } from './schemas/pokemon.schema';
import { PokemonDto } from "./dto/pokemon.dto";

@Injectable()
export class AppService {
	constructor(
		@InjectModel('pokemons') private pokemonModel: Model<PokemonDocument>
	){}

	async getPokemons(): Promise<Pokemon[]>{
		return this.pokemonModel.find().exec()
	}

	async createPokemon(create:PokemonDto): Promise<Pokemon>{
		return await new this.pokemonModel(create).save()
	}

	async getPokemon(id: string): Promise<Pokemon>{
		return this.pokemonModel.findById(id).exec()
	}
}
