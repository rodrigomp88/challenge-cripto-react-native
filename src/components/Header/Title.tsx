import React from 'react';
import {StyledViewTitle, TitleText} from './styles';

type Props = {
  mainText: string;
};

const Title: React.FC<Props> = ({mainText}) => (
  <StyledViewTitle>
    <TitleText>{mainText}</TitleText>
  </StyledViewTitle>
);

export default Title;
