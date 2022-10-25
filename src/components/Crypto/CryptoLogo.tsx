import React, {FunctionComponent} from 'react';
import {CryptoLogoProps} from '../../interfaces';
import {Image, StyledView} from './styles';

const CryptoLogo: FunctionComponent<CryptoLogoProps> = props => {
  return (
    <StyledView>
      <Image source={props.icon} />
    </StyledView>
  );
};

export default CryptoLogo;
