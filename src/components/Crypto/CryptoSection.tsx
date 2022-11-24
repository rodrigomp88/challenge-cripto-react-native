import React from 'react';
import {ListRenderItem} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CryptoProps} from '../../interfaces';
import {
  CryptoSectionBackground,
  Divider,
  NotCrypto,
  NotCryptoView,
} from './styles';
import CryptoItem from './CryptoItem';

import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const CryptoSection = () => {
  const cryptos = useSelector((state: RootState) => state.cryptos.cryptos);

  const renderItem: ListRenderItem<CryptoProps> = ({item}) => (
    <CryptoItem {...item} />
  );

  return (
    <CryptoSectionBackground>
      {cryptos <= 0 && (
        <NotCryptoView>
          <NotCrypto>There is not Crypto Currencies, please add one</NotCrypto>
        </NotCryptoView>
      )}
      <FlatList
        data={cryptos}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
    </CryptoSectionBackground>
  );
};

export default CryptoSection;
