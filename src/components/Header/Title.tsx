import React, {FunctionComponent} from 'react';
import {StyledViewTitle} from './styles';

import TitleText from '../Texts/TitleText';
import {TitleProps} from '../../interfaces';
import theme from '../../utils/theme';

const Title: FunctionComponent<TitleProps> = ({mainTextStyle, mainText}) => (
  <StyledViewTitle>
    <TitleText
      textStyles={[
        {
          color: theme.colors.white,
          fontSize: 20,
        },
        mainTextStyle,
      ]}>
      {mainText}
    </TitleText>
  </StyledViewTitle>
);

export default Title;
