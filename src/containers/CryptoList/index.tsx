import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Crypto from '../../components/Crypto';
import DataCrypto from '../../store/data';
import {NavLink} from './styles';

const CryptoList = () => {
  const renderItem = ({item}: any) => <Crypto item={item} />;
  return (
    <SafeAreaView>
      <FlatList
        data={DataCrypto}
        keyExtractor={({id}) => id}
        renderItem={renderItem}
      />
      <NavLink>+ Add Cryptocurrency</NavLink>
    </SafeAreaView>
  );
};

export default CryptoList;
