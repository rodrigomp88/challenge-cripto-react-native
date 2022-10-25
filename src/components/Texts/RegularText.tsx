import React, {FunctionComponent} from 'react';
import {TextProps} from '../../interfaces';
import {StyledRegularText} from './styles';

const RegularText: FunctionComponent<TextProps> = props => {
  return (
    <StyledRegularText style={props.textStyles}>
      {props.children}
    </StyledRegularText>
  );
};

export default RegularText;
