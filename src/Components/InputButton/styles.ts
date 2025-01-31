import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.COLORS.BASE_400};
  border-width: 1px;
`;
