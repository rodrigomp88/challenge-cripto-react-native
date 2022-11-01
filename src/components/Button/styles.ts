import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const ButtonView = styled.TouchableOpacity`
  padding: 40px;
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.primary};
  font-size: 16px;
`;
