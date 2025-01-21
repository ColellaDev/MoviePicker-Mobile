import { Container, Poster, Genre, Title } from "./styles";

type Props = {
    title: string;
}


export function MovieCard({title}: Props) {
    return(
        <Container>
            <Poster source={{ uri: "https://image.tmdb.org/t/p/w300/1E5baAaEse26fej7uHcjOgEE2t2.jpg" }}/>
            <Title>
                {title}
            </Title>
        </Container>
    )
}