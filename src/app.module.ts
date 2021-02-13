import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { PokemonSchema } from './schemas/pokemon.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/pokes'),
    MongooseModule.forFeature([{name: 'pokemons', schema: PokemonSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
