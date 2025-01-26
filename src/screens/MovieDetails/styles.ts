import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding-top: 30px;
`

export const Banner = styled.Image`
    width: 100%;
    height: 200px;
`;

export const Main = styled.View`
    flex-direction: row;
    margin-top: 10px;
`

export const Information = styled.View`
    margin-left: 15px;
`

export const Poster = styled.Image`
    width: 100px;
    aspect-ratio: 2 / 3;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 15px;
    margin-top: 5px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const Text = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
`

export const Raiting = styled.Text`
    color: ${({theme}) => theme.COLORS.BASE_500};
    font-size: 14px;
    margin-top: 2px;
`