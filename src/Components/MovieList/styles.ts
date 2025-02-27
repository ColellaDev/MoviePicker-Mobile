import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE_400};
  font-weight: bold;
  font-size: 18px;
`;