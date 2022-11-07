import React from 'react';
import {CryptoProps} from '../../interfaces/cryptoModel';
import CryptoLogo from './CryptoLogo';
import {
  ArrowImage,
  CryptoItemRow,
  CryptoName,
  CryptoSlug,
  LeftData,
  LeftView,
  Price,
  RightView,
  TextGreen,
  TextRed,
} from './styles';

import up from '../../assets/arrow-up.png';
import down from '../../assets/arrow-down.png';

const CryptoItem: React.FC<CryptoProps> = item => (
  <CryptoItemRow>
    <LeftView>
      <CryptoLogo icon={item.icon} />
      <LeftData>
        <CryptoName>{item.name}</CryptoName>
        <CryptoSlug>{item.slug}</CryptoSlug>
      </LeftData>
    </LeftView>
    <RightView>
      <Price>${item.price}</Price>
      {item.percentage_changed_last_24 > 0 ? (
        <TextGreen>
          <ArrowImage source={up} />
          {item.percentage_changed_last_24}%
        </TextGreen>
      ) : (
        <TextRed>
          <ArrowImage source={down} />
          {item.percentage_changed_last_24}%
        </TextRed>
      )}
    </RightView>
  </CryptoItemRow>
);

export default CryptoItem;
