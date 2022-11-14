import React from 'react';
import {ListRenderItem} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CryptoProps} from '../../interfaces';
import {CryptoSectionBackground, Divider} from './styles';
import CryptoItem from './CryptoItem';
import useFetchCollection from '../../hooks/useFetchCollection';
import Loading from '../Loader';

const CryptoSection = () => {
  const {coins, loading} = useFetchCollection();

  const renderItem: ListRenderItem<CryptoProps> = ({item}) => (
    <CryptoItem {...item} />
  );

  return (
    <CryptoSectionBackground>
      {loading && <Loading />}
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
