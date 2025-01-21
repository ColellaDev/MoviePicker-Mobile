import { Container, Poster, Raiting, Title } from "./styles";

type Props = {
    title: string;
    posterPath: string;
    raiting: number;
}


export function MovieCard({title, posterPath, raiting}: Props) {
    return(
        <Container>
            <Poster source={{ uri: `https://image.tmdb.org/t/p/w300${posterPath}` }} />
            <Raiting>
                {raiting}
            </Raiting>
            <Title>
                {title}
            </Title>
        </Container>
    )
}