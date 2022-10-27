import React, {FunctionComponent, ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {StyledRegularText} from './styles';

interface Props {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

const RegularText: FunctionComponent<Props> = ({textStyles, children}) => (
  <StyledRegularText style={textStyles}>{children}</StyledRegularText>
);

export default RegularText;
