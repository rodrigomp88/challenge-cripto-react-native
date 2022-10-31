import React, {FunctionComponent} from 'react';
import {CryptoProps} from '../../interfaces';
import theme from '../../utils/theme';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import CryptoLogo from './CryptoLogo';
import {
  ArrowImage,
  CryptoItemRow,
  Divider,
  LeftData,
  LeftView,
  RightView,
} from './styles';

import up from '../../assets/arrow-up.png';
import down from '../../assets/arrow-down.png';

const CryptoItem: FunctionComponent<CryptoProps> = item => (
  <CryptoItemRow>
    <LeftView>
      <CryptoLogo icon={item.icon} />
      <LeftData>
        <RegularText
          textStyles={{
            color: theme.colors.textDark,
          }}>
          {item.name}
        </RegularText>
        <SmallText
          textStyles={{
            color: theme.colors.textMedium,
          }}>
          {item.slug}
        </SmallText>
      </LeftData>
    </LeftView>
    <RightView>
      <RegularText
        textStyles={{
          color: theme.colors.textDark,
        }}>
        $ {item.price}
      </RegularText>
      {item.percentage_changed_last_24 > 0 ? (
        <SmallText textStyles={{color: theme.colors.green}}>
          <ArrowImage source={up} />
          {item.percentage_changed_last_24}%
        </SmallText>
      ) : (
        <SmallText textStyles={{color: theme.colors.red}}>
          <ArrowImage source={down} />
          {item.percentage_changed_last_24}%
        </SmallText>
      )}
    </RightView>
    <Divider />
  </CryptoItemRow>
);

export default CryptoItem;
