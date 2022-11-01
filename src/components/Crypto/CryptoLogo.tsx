import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {Image, StyledView} from './styles';

type Props = {
  icon: ImageSourcePropType;
};

const CryptoLogo: React.FC<Props> = ({icon}) => (
  <StyledView>
    <Image source={icon} />
  </StyledView>
);

export default CryptoLogo;
