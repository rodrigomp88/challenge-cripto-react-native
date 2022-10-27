import React, {FunctionComponent, ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {StyledSmallText} from './styles';

interface Props {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

const SmallText: FunctionComponent<Props> = ({textStyles, children}) => (
  <StyledSmallText style={textStyles}>{children}</StyledSmallText>
);

export default SmallText;
