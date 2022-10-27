import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary};
  width: 100%;
  padding: 40px;
`;
