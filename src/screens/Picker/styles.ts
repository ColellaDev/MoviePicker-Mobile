import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
  justify-content: center;
  padding-top: 70px;
`;

export  const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE_400};
  text-align: center;
  font-size: 18px;
  margin-top: 5px;
`

export const DrawButton = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`