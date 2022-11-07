import React, {ReactNode} from 'react';
import {GestureResponderEvent} from 'react-native';
import {ButtonView, ButtonText} from './styles';

type Props = {
  children: ReactNode;
  onPress: ((e: GestureResponderEvent) => void) | undefined;
};

const RegularButton: React.FC<Props> = ({children}) => (
  <ButtonView>
    <ButtonText>{children}</ButtonText>
  </ButtonView>
);

export default RegularButton;
