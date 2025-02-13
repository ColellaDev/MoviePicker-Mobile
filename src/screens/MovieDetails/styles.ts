import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding-top: 30px;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 200px;
`;

export const Main = styled.View`
  flex-direction: row;
  margin: 15px 0px;
  padding: 0px 12px;
`;

export const Information = styled.View`
  margin-left: 15px;
  width: 265px;
`;

export const Poster = styled.Image`
  width: 100px;
  aspect-ratio: 2 / 3;
  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.BASE_500};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS};
  margin-top: 10px;
  align-self: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 14px;
  margin-top: 5px;
`;

export const Raiting = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 14px;
  margin-top: 2px;
`;

export const Overview = styled.View`
  flex-direction: column;
  padding: 0px 12px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE_500};
  font-weight: bold;
  font-size: 15px;
`;

export const FavoriteButton = styled.TouchableOpacity<{isFavorite:boolean}>`
  background-color: ${({theme, isFavorite}) => isFavorite ? theme.COLORS.RED : theme.COLORS.GRAY_400 };
  flex-direction: row;
  width: 180px;
  border: 1px;
  border-color: ${({ theme, isFavorite }) => isFavorite ? theme.COLORS.WHITE : theme.COLORS.BASE_500 };
  border-radius: 10px;
  margin-top: 15px;
  padding: 5px;
  gap: 10px;
  align-self: center;
  align-items: center;
  justify-content: center;
`
export const FavoriteTextButton = styled.Text<{isFavorite:boolean}>`
  color: ${({ theme, isFavorite }) => isFavorite ? theme.COLORS.WHITE : theme.COLORS.BASE_500 };
  font-weight: bold;
`

export const PickerButton = styled.TouchableOpacity<{isPicker:boolean}>`
  background-color: ${({theme, isPicker}) => isPicker ? theme.COLORS.RED : theme.COLORS.GRAY_400 };
  flex-direction: row;
  width: 180px;
  border: 1px;
  border-color: ${({ theme, isPicker }) => isPicker ? theme.COLORS.WHITE : theme.COLORS.BASE_500 };
  border-radius: 10px;
  margin-top: 15px;
  padding: 5px;
  gap: 10px;
  align-self: center;
  align-items: center;
  justify-content: center;
`
export const PickerTextButton = styled.Text<{isPicker:boolean}>`
  color: ${({ theme, isPicker }) => isPicker ? theme.COLORS.WHITE : theme.COLORS.BASE_500 };
  font-weight: bold;
`