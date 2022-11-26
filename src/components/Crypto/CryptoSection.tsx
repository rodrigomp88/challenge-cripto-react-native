import React, {useEffect} from 'react';
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
import {RootState, useAppDispatch} from '../../store';
import {updateCrypto} from '../../store/actions';

const CryptoSection = () => {
  const dispatch = useAppDispatch();
  const cryptos = useSelector((state: RootState) => state.cryptos.cryptos);

  useEffect(() => {
    const time = setInterval(() => {
      dispatch(updateCrypto(cryptos));
    }, 5000);
    return () => clearInterval(time);
  }, [cryptos, dispatch]);

  const renderItem: ListRenderItem<CryptoProps> = ({item}) => (
    <CryptoItem {...item} />
  );

  return (
    <CryptoSectionBackground>
      {cryptos <= 0 && (
        <NotCryptoView>
          <NotCrypto>There is no Crypto Currencies, please add one</NotCrypto>
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
