import styled from 'styled-components/native';
import {colors} from '../colors';

//CryptoSection Styles
export const CryptoSectionBackground = styled.View`
  width: 100%;
  padding-horizontal: 25px;
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
  resize-mode: cover;
`;

//Old
export const Container = styled.View`
  height: 80px;
  width: 327px;
  left: 7%;
  margin-bottom: 2px;
  border-bottom-color: ${colors.neutral};
  border-bottom-width: 1px;
`;

export const Logo = styled.Image`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  top: 33%;
  right: 0;
  left: 0;
`;

export const InfoContainer = styled.View`
  position: relative;
  width: 25%;
  left: 18%;
  top: 20%;
`;

export const Name = styled.Text`
  color: ${colors.textDark};
  position: relative;
  font-size: 18px;
  bottom: 35px;
  font-weight: bold;
`;

export const Slug = styled.Text`
  position: relative;
  font-size: 16px;
  bottom: 35px;
  font-weight: lighter;
  left: 1%;
`;

export const Price = styled.Text`
  color: ${colors.textDark};
  position: relative;
  font-size: 16px;
  bottom: 55%;
  left: 80%;
`;

export const Arrow = styled.View`
  position: absolute;
  left: 81%;
  top: 55%;
`;

export const ArrowPorentage = styled.Image`
  width: 12px;
  height: 12px;
  margin-top: 3px;
`;

export const PercentageChangeLast24hrs = styled.Text`
  position: absolute;
  left: 85%;
  top: 55%;
  color: ${colors.red};
  font-size: 12px;
`;
