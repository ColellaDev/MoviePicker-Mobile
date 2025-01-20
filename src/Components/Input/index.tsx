import { Container } from "./styles";

type InputTypes ={
    placeholder: string;
}

export function Input({placeholder}:InputTypes) {
    return (
        <Container placeholder={placeholder}>
           
        </Container>
    ) 
}