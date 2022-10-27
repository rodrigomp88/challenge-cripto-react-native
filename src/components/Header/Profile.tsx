import React, {FunctionComponent} from 'react';
import {ProfileProps} from '../../interfaces';
import {StyledImageProfile, StyledViewProfile} from './styles';

const Profile: FunctionComponent<ProfileProps> = ({
  imgContainerStyle,
  imgStyle,
  img,
}) => (
  <StyledViewProfile style={imgContainerStyle}>
    <StyledImageProfile style={imgStyle} source={img} />
  </StyledViewProfile>
);

export default Profile;
