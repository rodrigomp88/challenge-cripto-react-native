import React, {FunctionComponent} from 'react';
import {CryptoLogoProps} from '../../interfaces';
import {Image, StyledView} from './styles';

const CryptoLogo: FunctionComponent<CryptoLogoProps> = ({icon}) => (
  <StyledView>
    <Image source={icon} />
  </StyledView>
);

export default CryptoLogo;
