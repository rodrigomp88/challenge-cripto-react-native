import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const LoadingWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.Text`
  font-size: 24px;
`;

export const Dot = styled.View`
  background-color: ${theme.colors.primary};
  border-radius: 50px;
  width: 1px;
  height: 1px;
  margin: 0 1px;
`;
