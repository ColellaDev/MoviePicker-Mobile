import styled from "styled-components/native";

export const Container = styled.TextInput`
  height: 40px;
  width: 310px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-color: ${({ theme }) => theme.COLORS.BASE_400};
  border-width: 1px;
  border-radius: 8px;
  padding: 10px;
`;
