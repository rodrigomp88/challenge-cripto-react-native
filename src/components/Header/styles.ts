import styled from 'styled-components/native';
import theme from '../../utils/theme';

//Title Styles
export const StyledViewTitle = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  color: ${theme.colors.white};
  text-align: left;
  font-weight: bold;
`;

//Profile Styles
export const StyledViewProfile = styled.View`
  height: 48px;
  width: 48px;
`;

export const StyledImageProfile = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;
