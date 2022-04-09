import { Layout } from "../../components/layouts";
import { Nofavorites} from "../../components/ui";
import { useEffect, useState } from "react";
import { localFavorites } from "../../utils";
import { useRouter } from "next/router";
import { FavoritesPokemons } from "../../components/pokemon";

const FavoritesPage = () => {
  const router = useRouter();
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect (()=> {

    setfavoritePokemons(localFavorites.pokemons());

  },[]);

  
  return (
    <Layout title="Pokemons - favoritos">
        
        {
          favoritePokemons.length === 0
          ? (<Nofavorites />)
          : (
            <FavoritesPokemons pokemons={favoritePokemons}/>
          )
        }
        
        
    </Layout>
  )
}

export default FavoritesPage;