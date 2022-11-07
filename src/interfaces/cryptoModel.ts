import {ImageSourcePropType} from 'react-native';

export interface CryptoProps {
  id: number;
  icon: ImageSourcePropType;
  name: string;
  slug: string;
  price: number;
  percentage_changed_last_24: number;
}
