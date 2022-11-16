import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const AddContainer = styled.View`
  height: 100%;
  padding-left: 10%;
  padding-right: 10%;
  background-color: ${theme.colors.white};
`;

export const ButtonView = styled.TouchableOpacity`
  height: 130px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.primary};
  font-size: 16px;
`;
