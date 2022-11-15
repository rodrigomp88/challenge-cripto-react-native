import styled from 'styled-components/native';
import {Container} from '../../components/container';
import theme from '../../utils/theme';

export const AddContainer = styled(Container)`
  width: 100%;
`;

export const ButtonView = styled.TouchableOpacity`
  right: 40%;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.primary};
  font-size: 16px;
`;
