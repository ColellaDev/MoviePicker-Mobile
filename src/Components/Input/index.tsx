import { Container } from "./styles";

type InputTypes ={
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    onSubmitEditing: () => void;
}

export function Input({placeholder, value, onChangeText, onSubmitEditing}:InputTypes) {
    return (
        <Container 
            placeholder={placeholder} 
            value={value} 
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
         />
    ) 
}