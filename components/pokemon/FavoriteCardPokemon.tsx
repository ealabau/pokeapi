import { Card, Grid, Row,Text } from "@nextui-org/react"
import { FC } from "react";
import { useRouter } from 'next/router';

interface Props {
pokemonId: number;

}

export const FavoriteCardPokemon:FC<Props> = ({pokemonId}) => {

  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`)
  }
  return (
    <Grid xs={6} sm={3} xl={1} 
    onClick={onFavoriteClicked}
    >
    <Card hoverable clickable 
>
<Card.Body css={{p:1}}>
<Row justify='flex-end' css={{paddingRight:10}}>

<Text>#{ pokemonId }</Text>
</Row>
<Card.Image
src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
height={140}
width="100%"
/>

</Card.Body>
<Card.Footer>
<Row justify='center'>
<Text transform='capitalize'></Text>

</Row>
</Card.Footer>
</Card>
  </Grid>
  )
}
