import React from 'react';
import {ListRenderItem} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CryptoProps} from '../../interfaces/cryptoModel';
import DataCrypto from '../../store/DataCrypto';
import CryptoItem from './CryptoItem';
import {CryptoSectionBackground, Divider} from './styles';

const CryptoSection = () => {
  const renderItem: ListRenderItem<CryptoProps> = ({item}) => (
    <CryptoItem {...item} />
  );

  return (
    <CryptoSectionBackground>
      <FlatList
        data={DataCrypto}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
    </CryptoSectionBackground>
  );
};

export default CryptoSection;
