import { Container } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacityProps } from "react-native";

type InputButtonProps = TouchableOpacityProps & {
    onPress: () => void; 
  };

export function InputButton({onPress}: InputButtonProps) {
    return (
        <Container onPress={onPress} >
            <Ionicons name="search" size={19} color="#FFD447" />
        </Container>
    )
}
