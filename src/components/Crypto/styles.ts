import styled from 'styled-components/native';
import theme from '../../utils/theme';

type CryptoAdd = {
  readonly isActive: boolean;
};

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

export const CryptoName = styled.Text`
  color: ${theme.colors.textDark};
  font-weight: 700;
  font-size: 16px;
`;

export const CryptoSlug = styled.Text`
  font-size: 14px;
  text-align: left;
  font-weight: normal;
  color: ${theme.colors.textMedium};
`;

export const RightView = styled.View`
  flex: 1;
  left: 30px;
`;

export const Price = styled.Text`
  color: ${theme.colors.textDark};
  font-weight: 700;
  font-size: 16px;
`;

export const ArrowImage = styled.Image`
  width: 12px;
  height: 11px;
`;

export const TextGreen = styled.Text`
  color: ${theme.colors.green};
  font-size: 14px;
  font-weight: normal;
`;

export const TextRed = styled.Text`
  color: ${theme.colors.red};
  font-size: 14px;
  font-weight: normal;
`;

export const StyledView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 50px;
`;

//CryptoSection Styles
export const CryptoSectionBackground = styled.View`
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 30px;
  flex: 2;
`;

export const Divider = styled.View`
  border-bottom-width: 0.1px;
  border: ${theme.colors.neutral};
  margin-bottom: 20px;
`;

export const NotCryptoView = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 50%;
`;

export const NotCrypto = styled.Text`
  font-size: 24px;
  text-align: center;
`;

//CryptoAddForm
export const CryptoAddFormContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: ${theme.colors.textDark};
  font-size: 24px;
  top: 20%;
  margin-bottom: 24px;
`;

export const Input = styled.TextInput<CryptoAdd>`
  padding-left: 10px;
  border-width: 0.5px;
  border-radius: 4px;
  font-size: 16px;
  height: 55px;
  top: 20%;
  border: 1px solid
    ${props =>
      props.isActive ? theme.colors.secondary : theme.colors.textLight};
`;

export const ButtonAdd = styled.TouchableOpacity`
  background-color: ${theme.colors.secondary};
  border-radius: 4px;
  color: black;
  height: 55px;
  width: 50%;
  margin-left: 50%;
  top: 25%;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${props =>
    props.disabled ? theme.colors.disabled : theme.colors.primary};
  font-weight: bold;
  font-size: 18px;
`;
