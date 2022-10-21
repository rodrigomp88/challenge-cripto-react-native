import React from 'react';
import {HeaderNav, HeaderText, HeaderImage} from './styles';

const Header = (): JSX.Element => {
  return (
    <HeaderNav>
      <HeaderText>CriptoTracker Pro</HeaderText>
      <HeaderImage source={require('../../assets/photo.png')} />
    </HeaderNav>
  );
};

export default Header;
