import React from 'react';
import {StatusBar} from 'react-native';
import {ButtonView, HomeContainer, ButtonText} from './styles';
import theme from '../../utils/theme';
import CryptoSection from '../../components/Crypto/CryptoSection';

import {StackScreenProps} from '@react-navigation/stack';
import {PropsNavigator} from '../../navigator/RootStack';

type Props = StackScreenProps<PropsNavigator>;

const Home: React.FC<Props> = ({navigation}) => (
  <HomeContainer>
    <StatusBar
      barStyle="light-content"
      backgroundColor={theme.colors.primary}
    />
    <CryptoSection />

    <ButtonView onPress={() => navigation.navigate('AddNewCryptocurrency')}>
      <ButtonText>+ Add New Crypto Currency</ButtonText>
    </ButtonView>
    {/* <RegularButton onPress={navigation.navigate('AddNewCryptocurrency')}>
      + Add a Cryptocurrency
    </RegularButton> */}
  </HomeContainer>
);

export default Home;
