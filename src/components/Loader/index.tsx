import React from 'react';
import {Dot, LoadingText, LoadingWrapper} from './styles';

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoadingText>Loading</LoadingText>
      <Dot />
      <Dot />
      <Dot />
    </LoadingWrapper>
  );
};

export default Loading;
