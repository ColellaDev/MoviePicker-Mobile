import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE_400};
`;

export const CategoryContainer = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
  gap: 10px;
`

export const CategoryButton = styled.TouchableOpacity<{ isActive: boolean }>`
  background-color: ${({theme, isActive}) => isActive ? theme.COLORS.GRAY_400 : theme.COLORS.GRAY_300};
  border: 1px;
  border-color: ${({theme, isActive}) => isActive ? theme.COLORS.BASE_500 : theme.COLORS.GRAY_400};
  padding: 4px 8px;
  border-radius: 8px;
`

export const CategoryButtonText = styled.Text<{ isActive: boolean }>`
  color: ${({theme, isActive}) => isActive ? theme.COLORS.BASE_500 : theme.COLORS.WHITE};
  font-weight: bold;
`