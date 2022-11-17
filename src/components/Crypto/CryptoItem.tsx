import React from 'react';
import {CryptoProps} from '../../interfaces';
import {
  ArrowImage,
  CryptoItemRow,
  CryptoName,
  CryptoSlug,
  LeftData,
  LeftView,
  Image,
  Price,
  RightView,
  TextGreen,
  TextRed,
  StyledView,
} from './styles';

import up from '../../assets/arrow-up.png';
import down from '../../assets/arrow-down.png';

const CryptoItem: React.FC<CryptoProps> = ({id, name, symbol, market_data}) => (
  <CryptoItemRow>
    <LeftView>
      <StyledView>
        <Image
          source={{
            uri: `https://messari.io/asset-images/${id}/128.png`,
          }}
        />
      </StyledView>
      <LeftData>
        <CryptoName>{name}</CryptoName>
        <CryptoSlug>{symbol}</CryptoSlug>
      </LeftData>
    </LeftView>
    <RightView>
      <Price>${market_data.price_usd.toFixed(2)}</Price>
      {market_data.percent_change_usd_last_24_hours > 0 ? (
        <TextGreen>
          <ArrowImage source={up} />
          {market_data.percent_change_usd_last_24_hours.toFixed(2)}%
        </TextGreen>
      ) : (
        <TextRed>
          <ArrowImage source={down} />
          {market_data.percent_change_usd_last_24_hours.toFixed(2)}%
        </TextRed>
      )}
    </RightView>
  </CryptoItemRow>
);

export default CryptoItem;
