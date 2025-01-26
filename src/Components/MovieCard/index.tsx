import { Container, Poster, Raiting, Title} from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    title: string;
    posterPath: string;
    raiting: number;
    onPress: ()=> void;
}

export function MovieCard({title, posterPath, raiting, onPress}: Props) {
    return(
        <Container onPress={onPress}>
            <Poster source={{ uri: `https://image.tmdb.org/t/p/w300${posterPath}` }} />    
            <Raiting>
            <Ionicons name="star" size={13} color="#FFD447" />  {raiting}
            </Raiting>
            <Title>
                {title}
            </Title>
        </Container>
    )
}