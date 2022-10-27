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

const CryptoItem: FunctionComponent<CryptoProps> = ({
  icon,
  name,
  slug,
  price,
  percentage_changed_last_24,
}) => (
  <CryptoItemRow>
    <LeftView>
      <CryptoLogo icon={icon} />
      <LeftData>
        <RegularText
          textStyles={{
            color: theme.colors.textDark,
          }}>
          {name}
        </RegularText>
        <SmallText
          textStyles={{
            color: theme.colors.textMedium,
          }}>
          {slug}
        </SmallText>
      </LeftData>
    </LeftView>
    <RightView>
      <RegularText
        textStyles={{
          color: theme.colors.textDark,
        }}>
        $ {price}
      </RegularText>
      {percentage_changed_last_24 > 0 ? (
        <SmallText textStyles={{color: theme.colors.green}}>
          <ArrowImage source={up} />
          {percentage_changed_last_24}%
        </SmallText>
      ) : (
        <SmallText textStyles={{color: theme.colors.red}}>
          <ArrowImage source={down} />
          {percentage_changed_last_24}%
        </SmallText>
      )}
    </RightView>
    <Divider />
  </CryptoItemRow>
);

export default CryptoItem;
