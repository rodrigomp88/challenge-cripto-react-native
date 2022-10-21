import styled from 'styled-components/native';
import theme from '../../libs/theme';

export const Container = styled.View`
  height: 100px;
  width: 85%;
  left: 7%;
  margin-bottom: 10px;
  border-bottom-color: ${theme.colors.textLight};
  border-bottom-width: 1px;
`;

export const Logo = styled.Image`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  top: 33%;
  right: 5%;
  left: 0;
`;

export const InfoContainer = styled.View`
  position: relative;
  width: 25%;
  left: 18%;
  top: 20%;
`;

export const Name = styled.Text`
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
  color: ${theme.colors.red};
  font-size: 12px;
`;
