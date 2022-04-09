import { Card, Grid,Link,Row, Text} from '@nextui-org/react';
import { FC } from 'react';
import { Pokemon } from "../../interfaces";
import { useRouter } from 'next/router';

interface Props {
    pokemon: Pokemon
}

export const PokemonCard:FC<Props> = ({pokemon:{id,name,pic}}) => {
const router = useRouter();
const onClick = () => {
  router.push(`/name/${name}`);
}

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
     
    <Card hoverable clickable 
    title={name}
    onClick={onClick}>
  <Card.Body css={{p:1}}>
  <Row justify='flex-end' css={{paddingRight:10}}>
  
  <Text>#{ id }</Text>
  </Row>
  <Card.Image
    src={pic}
    height={140}
    width="100%"
    alt={name}
  />
  </Card.Body>
  <Card.Footer>
    <Row justify='center'>
      <Text transform='capitalize'>{name}</Text>
      
    </Row>
  </Card.Footer>
</Card>

</Grid>
  )
}
