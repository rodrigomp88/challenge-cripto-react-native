import React from 'react';
import {AddContainer, ButtonText, ButtonView} from './styles';

import {StackScreenProps} from '@react-navigation/stack';
import {PropsNavigator} from '../../navigator/RootStack';

type Props = StackScreenProps<PropsNavigator>;

const AddNewCryptocurrency: React.FC<Props> = ({navigation}) => (
  <AddContainer>
    <ButtonView onPress={() => navigation.navigate('Home')}>
      <ButtonText>Volver</ButtonText>
    </ButtonView>
  </AddContainer>
);

export default AddNewCryptocurrency;
