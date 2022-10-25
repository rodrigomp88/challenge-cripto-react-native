import React, {FunctionComponent} from 'react';
import {StyledViewTitle} from './styles';

import TitleText from '../Texts/TitleText';
import {TitleProps} from '../../interfaces';
import {colors} from '../colors';

const Title: FunctionComponent<TitleProps> = props => {
  return (
    <StyledViewTitle>
      <TitleText
        textStyles={[
          {
            color: colors.white,
            fontSize: 20,
          },
          props.mainTextStyle,
        ]}>
        {props.mainText}
      </TitleText>
    </StyledViewTitle>
  );
};

export default Title;
