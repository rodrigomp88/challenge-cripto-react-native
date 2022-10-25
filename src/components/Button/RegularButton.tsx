import React, {FunctionComponent} from 'react';
import {ButtonProps} from '../../interfaces';
import {colors} from '../colors';
import RegularText from '../Texts/RegularText';
import {ButtonView} from './styles';

const RegularButton: FunctionComponent<ButtonProps> = props => {
  return (
    <ButtonView>
      <RegularText textStyles={{color: colors.primary}}>
        {props.children}
      </RegularText>
    </ButtonView>
  );
};

export default RegularButton;
