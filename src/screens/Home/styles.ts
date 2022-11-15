import styled from 'styled-components/native';
import theme from '../../utils/theme';
import {Container} from '../../components/container';

export const HomeContainer = styled(Container)`
  background-color: ${theme.colors.white};
  width: 100%;
  flex: 1;
`;

export const ButtonView = styled.TouchableOpacity`
  padding: 40px;
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.primary};
  font-size: 16px;
`;
