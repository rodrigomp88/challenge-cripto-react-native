import React, {FunctionComponent} from 'react';
import {CryptoProps} from '../../interfaces';
import {colors} from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import CryptoLogo from './CryptoLogo';
import {
  ArrowImage,
  CryptoItemRow,
  LeftData,
  LeftView,
  RightView,
} from './styles';

import up from '../../assets/arrow-up.png';
import down from '../../assets/arrow-down.png';

const CryptoItem: FunctionComponent<CryptoProps> = props => {
  return (
    <CryptoItemRow>
      <LeftView>
        <CryptoLogo icon={props.icon} />
        <LeftData>
          <RegularText
            textStyles={{
              color: colors.textDark,
              fontWeight: 'bold',
            }}>
            {props.name}
          </RegularText>
          <SmallText
            textStyles={{
              color: colors.textMedium,
            }}>
            {props.slug}
          </SmallText>
        </LeftData>
      </LeftView>
      <RightView>
        <RegularText
          textStyles={{
            color: colors.textDark,
            fontWeight: 'bold',
          }}>
          $ {props.price}
        </RegularText>
        {props.percentage_last_24 > 0 ? (
          <SmallText textStyles={{color: colors.green}}>
            <ArrowImage source={up} />
            {props.percentage_last_24}%
          </SmallText>
        ) : (
          <SmallText textStyles={{color: colors.red}}>
            <ArrowImage source={down} />
            {props.percentage_last_24}%
          </SmallText>
        )}
      </RightView>
    </CryptoItemRow>
  );
};

export default CryptoItem;
