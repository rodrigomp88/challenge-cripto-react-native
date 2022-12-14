import React from 'react';
import {StatusBar} from 'react-native';
import {AddContainer, ButtonText, ButtonView} from './styles';

import {StackScreenProps} from '@react-navigation/stack';
import {PropsNavigator} from '../../navigator/RootStack';

import CryptoAddForm from '../../components/Crypto/CryptoAdd';
import theme from '../../utils/theme';

type Props = StackScreenProps<PropsNavigator>;

const AddNewCryptocurrency: React.FC<Props> = ({navigation}) => {
  return (
    <AddContainer>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.white} />
      <ButtonView onPress={() => navigation.navigate('Home')}>
        <ButtonText>{'< Back to list'}</ButtonText>
      </ButtonView>
      <CryptoAddForm navigation={navigation} />
    </AddContainer>
  );
};
export default AddNewCryptocurrency;
