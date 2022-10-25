import {ReactNode} from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface TextProps {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

export interface TitleProps {
  mainText: string;
  mainTextStyle?: StyleProp<TextStyle>;
}

export interface ProfileProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
}

export interface CryptoProps {
  id: number;
  icon: ImageSourcePropType;
  name: string;
  slug: string;
  price: number;
  percentage_last_24: number;
}

export interface CryptopSectionProps {
  data: Array<CryptoProps>;
}

export interface CryptoLogoProps {
  icon: any;
}

export interface ButtonProps {
  btnStyles?: any;
  textStyles?: any;
  children: ReactNode;
  onPress: ((e: GestureResponderEvent) => void) | undefined;
}
