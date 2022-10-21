import React from 'react';
import {CryptoTypes} from '../../types';
import {
  Container,
  Logo,
  Name,
  Slug,
  InfoContainer,
  Price,
  PercentageChangeLast24hrs,
  Arrow,
  ArrowPorentage,
} from './styles';

const Crypto = ({item}: {item: CryptoTypes}): JSX.Element => {
  return (
    <Container>
      <Logo source={item.image} />
      <InfoContainer>
        <Name>{item.name}</Name>
        <Slug>{item.slug}</Slug>
      </InfoContainer>
      <Price>{item.price}</Price>
      <PercentageChangeLast24hrs>
        {item.percentage_last_24}
      </PercentageChangeLast24hrs>
      <Arrow>
        <ArrowPorentage source={require('../../assets/arrow-down.png')} />
      </Arrow>
    </Container>
  );
};

export default Crypto;
