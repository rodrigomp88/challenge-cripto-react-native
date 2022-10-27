import React, {FunctionComponent} from 'react';
import {ButtonProps} from '../../interfaces';
import theme from '../../utils/theme';
import RegularText from '../Texts/RegularText';
import {ButtonView} from './styles';

const RegularButton: FunctionComponent<ButtonProps> = ({children}) => (
  <ButtonView>
    <RegularText textStyles={{color: theme.colors.primary}}>
      {children}
    </RegularText>
  </ButtonView>
);

export default RegularButton;
