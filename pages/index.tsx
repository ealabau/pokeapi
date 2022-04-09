import {Grid} from '@nextui-org/react';
import type { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import {pokeApi} from '../api';
import { PokemonListResponse,SmallPokemon,Pokemon } from '../interfaces';
import Image from 'next/image';

interface Props {

  pokemons: Pokemon[];

}

const HomePage: NextPage<Props> = ({pokemons}) => {
 
  //console.log(pokemons);
 
  return (

    <Layout title='Listado de Pokemones'>

      
      <Grid.Container gap={2} justify='flex-start'>
      {pokemons.map((pokemon) => (
        <PokemonCard
         key={ pokemon.id}
         pokemon={pokemon}
        />
        ))}
        </Grid.Container>
     
    </Layout>
    
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {

const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=153');
const pokemonList = TransformarPokemon(data.results);

  return {
    props: {
      pokemons: pokemonList

    }
  }
  
}

const TransformarPokemon =  (smallPokemonList:SmallPokemon[]): Pokemon[] =>{

  const pokemonArr: Pokemon[] = smallPokemonList.map( poke => {

    const pokeArr = poke.url.split('/');
    const id = pokeArr[6];
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
      return {
        id,
        name: poke.name,
        pic
      }
    }
  )
  return pokemonArr;
}

export default HomePage;
