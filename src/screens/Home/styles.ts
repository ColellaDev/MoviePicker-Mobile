import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    align-items: center;
    justify-content: center;
    padding-top: 50px; 
`

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
`

export const Text = styled.Text`
    flex: 1;
    
    color: ${({theme}) => theme.COLORS.BASE_400};

`