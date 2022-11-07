import React, {useState, useEffect} from 'react';
import {ListRenderItem} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CryptoProps} from '../../interfaces';
import CryptoItem from './CryptoItem';
import {CryptoSectionBackground, Divider} from './styles';
import {API_URL} from '@env';

const CryptoSection = () => {
  const [coins, setCoins] = useState<CryptoProps[]>([]);

  const loadCryptosData = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setCoins(data.data);
  };

  useEffect(() => {
    loadCryptosData();
  }, []);

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
