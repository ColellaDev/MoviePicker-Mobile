import styled from "styled-components/native";

export const Container = styled.TextInput`
height: 40px;
width: 320px;
background-color: ${({theme}) => theme.COLORS.GRAY_300};
border-Color: ${({theme}) => theme.COLORS.BASE_400};
border-Width: 2px;
border-Radius: 8px;
padding: 10px;
margin: 20px;
`