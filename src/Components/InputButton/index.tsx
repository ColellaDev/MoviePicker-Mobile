import { Container } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

export function InputButton({...rest}) {
    return (
        <Container {...rest}>
            <Ionicons name="search" size={19} color="#FFD447" />
        </Container>
    )
}
