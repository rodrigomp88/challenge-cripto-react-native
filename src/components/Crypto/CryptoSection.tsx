import React from 'react';
import {ListRenderItem} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CryptoProps} from '../../interfaces';
import CryptoItem from './CryptoItem';
import {CryptoSectionBackground, Divider} from './styles';
import useFetchCollection from '../../hooks/useFetchCollection';

const CryptoSection = () => {
  const {coins} = useFetchCollection();

  const renderItem: ListRenderItem<CryptoProps> = ({item}) => (
    <CryptoItem {...item} />
  );

  return (
    <CryptoSectionBackground>
      <FlatList
        data={coins}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
    </CryptoSectionBackground>
  );
};

export default CryptoSection;
