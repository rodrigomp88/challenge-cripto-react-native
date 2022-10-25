import React, {FunctionComponent} from 'react';
import {CryptopSectionProps} from '../../interfaces';
import CryptoItem from './CryptoItem';
import {CryptoList, CryptoSectionBackground} from './styles';

const CryptoSection: FunctionComponent<CryptopSectionProps> = props => {
  return (
    <CryptoSectionBackground>
      <CryptoList
        data={props.data}
        showsVerticalScrollIndicator={false}
        keyExtractor={({id}: any) => id.toString()}
        renderItem={({item}: any) => <CryptoItem {...item} />}
      />
    </CryptoSectionBackground>
  );
};

export default CryptoSection;
