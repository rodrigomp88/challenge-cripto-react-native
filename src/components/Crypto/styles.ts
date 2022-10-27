import styled from 'styled-components/native';
import theme from '../../utils/theme';

//CryptoSection Styles
export const CryptoSectionBackground = styled.View`
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 30px;
  flex: 2;
`;

export const CryptoList = styled.FlatList`
  width: 100%;
`;

//CryptoItem Styles
export const CryptoItemRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const Divider = styled.View`
  border-bottom-width: 1px;
  border-bottom: solid ${theme.colors.textLight};
  margin-bottom: 20px;
`;

export const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;

export const LeftData = styled.View`
  margin-left: 10px;
`;

export const RightView = styled.View`
  flex: 1;
  left: 30px;
`;

export const ArrowImage = styled.Image`
  width: 12px;
  height: 11px;
`;

//CryptoLogo Styles
export const StyledView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 50px;
`;
