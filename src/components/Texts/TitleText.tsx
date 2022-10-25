import React, {FunctionComponent} from 'react';
import {TextProps} from '../../interfaces';
import {StyledTitleText} from './styles';

const TitleText: FunctionComponent<TextProps> = props => {
  return (
    <StyledTitleText style={props.textStyles}>{props.children}</StyledTitleText>
  );
};

export default TitleText;
