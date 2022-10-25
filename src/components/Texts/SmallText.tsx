import React, {FunctionComponent} from 'react';
import {TextProps} from '../../interfaces';
import {StyledSmallText} from './styles';

const SmallText: FunctionComponent<TextProps> = props => {
  return (
    <StyledSmallText style={props.textStyles}>{props.children}</StyledSmallText>
  );
};

export default SmallText;
