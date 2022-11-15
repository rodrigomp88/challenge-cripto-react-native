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

const CryptoItem: React.FC<CryptoProps> = item => (
  <CryptoItemRow>
    <LeftView>
      <StyledView>
        <Image
          source={{
            uri: `https://messari.io/asset-images/${item.id}/32.png`,
          }}
        />
      </StyledView>
      <LeftData>
        <CryptoName>{item.name}</CryptoName>
        <CryptoSlug>{item.symbol}</CryptoSlug>
      </LeftData>
    </LeftView>
    <RightView>
      <Price>${item.metrics.market_data.price_usd.toFixed(2)}</Price>
      {item.metrics.market_data.percent_change_usd_last_24_hours > 0 ? (
        <TextGreen>
          <ArrowImage source={up} />
          {item.metrics.market_data.percent_change_usd_last_24_hours.toFixed(5)}
          %
        </TextGreen>
      ) : (
        <TextRed>
          <ArrowImage source={down} />
          {item.metrics.market_data.percent_change_usd_last_24_hours.toFixed(5)}
          %
        </TextRed>
      )}
    </RightView>
  </CryptoItemRow>
);

export default CryptoItem;
