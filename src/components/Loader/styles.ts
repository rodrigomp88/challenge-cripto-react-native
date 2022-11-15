import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const LoadingWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
`;

export const LoadingText = styled.Text`
  font-size: 24px;
  color: ${theme.colors.secondary};
`;
