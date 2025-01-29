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
    margin: 15px 0px;
    padding: 0px 10px;
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
    font-size: 20px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    margin-top: 10px;
    align-self: center;
`

export const Text = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-top: 5px;
`

export const Raiting = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 14px;
    margin-top: 2px;
`

export const Overview = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    padding: 0px 10px;
`