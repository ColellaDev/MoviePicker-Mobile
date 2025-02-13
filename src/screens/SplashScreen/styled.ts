import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border: 2px;
  border-radius: 15px;
  border-color: ${({theme}) => theme.COLORS.BASE_500};

`;

export const Title = styled.Text`
  font-size: 28px;
  color: white;
  font-weight: bold;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.BASE_500};
`;

export const TitleTest = styled.Text`
  font-size: 28px;
  color: white;
  font-weight: bold;
  font-family: ${({theme}) => theme.FONT_FAMILY.POPPINS};
  color: ${({theme}) => theme.COLORS.BASE_500}
`;
