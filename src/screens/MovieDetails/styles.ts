import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    align-items: center;
    justify-content: center;
    padding-top: 50px; 
`

export const Banner = styled.Image`
    width: 100%;
`;

export const Poster = styled.Image`
    width: 100%;
    aspect-ratio: 2 / 3;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 15px;
    text-align: center;
    margin-top: 5px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const Text = styled.Text`
    color: ${({theme}) => theme.COLORS.BASE_400};
`

export const Raiting = styled.Text`
    color: ${({theme}) => theme.COLORS.BASE_500};
    font-size: 14px;
    text-align: center;
    margin-top: 2px;
`