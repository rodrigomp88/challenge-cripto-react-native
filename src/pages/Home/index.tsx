import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import CryptoList from '../../containers/CryptoList';

const Home = (): JSX.Element => {
  return (
    <View>
      <Header />
      <CryptoList />
    </View>
  );
};

export default Home;
