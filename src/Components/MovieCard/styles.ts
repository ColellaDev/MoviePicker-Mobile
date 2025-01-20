import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    width: 120px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    border-radius: 6px;
    margin: 5px;
    align-items: center;
    padding-bottom: 5px;
`

export const Poster = styled.Image`
    width: 100%;
    aspect-ratio: 2 / 3;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 15px;
    text-align: center;
    margin-top: 5px;
`

export const Genre = styled.Text`
    color: ${({theme}) => theme.COLORS.BASE_500};
    font-size: 14px;
    text-align: center;
    margin-top: 2px;
    
`