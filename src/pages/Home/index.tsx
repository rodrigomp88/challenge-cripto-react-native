import React, {FunctionComponent} from 'react';

import {StatusBar} from 'react-native';
import {HomeContainer} from './styles';
import {colors} from '../../components/colors';

import CryptoSection from '../../components/Crypto/CryptoSection';
import DataCrypto from '../../store/DataCrypto';
import RegularButton from '../../components/Button/RegularButton';

const Home: FunctionComponent = () => {
  return (
    <HomeContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <CryptoSection data={DataCrypto} />

      <RegularButton onPress={() => {}}>+ Add new CryptoCurrency</RegularButton>
    </HomeContainer>
  );
};

export default Home;
