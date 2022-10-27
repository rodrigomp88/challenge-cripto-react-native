import {ReactNode} from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

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
  percentage_changed_last_24: number;
}

export interface CryptopSectionProps {
  data: Array<CryptoProps>;
}

export interface CryptoLogoProps {
  icon: ImageSourcePropType;
}

export interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
  onPress: ((e: GestureResponderEvent) => void) | undefined;
}
