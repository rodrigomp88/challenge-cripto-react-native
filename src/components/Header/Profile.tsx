import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {StyledImageProfile, StyledViewProfile} from './styles';

type Props = {
  img: ImageSourcePropType;
};

const Profile: React.FC<Props> = ({img}) => (
  <StyledViewProfile>
    <StyledImageProfile source={img} />
  </StyledViewProfile>
);

export default Profile;
