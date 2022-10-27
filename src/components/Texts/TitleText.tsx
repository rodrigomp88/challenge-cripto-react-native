import React, {FunctionComponent, ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {StyledTitleText} from './styles';

interface Props {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

const TitleText: FunctionComponent<Props> = ({textStyles, children}) => (
  <StyledTitleText style={textStyles}>{children}</StyledTitleText>
);

export default TitleText;
