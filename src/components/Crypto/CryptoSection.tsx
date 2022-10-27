import React, {FunctionComponent} from 'react';
import {CryptopSectionProps} from '../../interfaces';
import CryptoItem from './CryptoItem';
import {CryptoList, CryptoSectionBackground, Divider} from './styles';

const CryptoSection: FunctionComponent<CryptopSectionProps> = ({data}) => {
  const renderItem = ({item}: any) => <CryptoItem {...item} />;

  return (
    <CryptoSectionBackground>
      <CryptoList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={({id}: any) => id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
    </CryptoSectionBackground>
  );
};

export default CryptoSection;
