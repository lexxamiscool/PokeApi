import { Controller, Get, Res, Req, Response, Post, Body, Param} from '@nestjs/common';
import { AppService } from './app.service';
import { PokemonDto } from './dto/pokemon.dto';

@Controller() //basePath
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getPokemons(@Res() res) {
    const pokemons = await this.appService.getPokemons()
    return res.json(pokemons)
  }

  @Get(':id')
  async getPokemon(@Res() res, @Param('id') id) {
    const pokemon = await this.appService.getPokemon(id)
    return res.json(pokemon)
  }

  @Post()
  async createPokemon(@Res() res, @Body() bodi: PokemonDto){
    const pokemon = await this.appService.createPokemon(bodi)
    return res.json(pokemon)
  }
}