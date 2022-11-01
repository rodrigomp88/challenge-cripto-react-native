import React from 'react';
import {StatusBar} from 'react-native';
import {HomeContainer} from './styles';
import theme from '../../utils/theme';
import CryptoSection from '../../components/Crypto/CryptoSection';
import RegularButton from '../../components/Button/RegularButton';

const Home = () => (
  <HomeContainer>
    <StatusBar
      barStyle="light-content"
      backgroundColor={theme.colors.primary}
    />
    <CryptoSection />

    <RegularButton onPress={() => {}}>+ Add a Cryptocurrency</RegularButton>
  </HomeContainer>
);

export default Home;
