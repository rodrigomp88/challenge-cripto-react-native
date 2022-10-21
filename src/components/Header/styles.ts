import styled from 'styled-components/native';
import theme from '../../libs/theme';

export const HeaderNav = styled.View`
  background-color: ${theme.colors.primary};
  height: 130px;
`;

export const HeaderText = styled.Text`
  left: 24px;
  top: 60px;
  color: ${theme.colors.white};
  font-weight: 700;
  font-size: 20px;
`;

export const HeaderImage = styled.Image`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  top: 25px;
  left: 78%;
`;
