import React, {FunctionComponent} from 'react';
import {ProfileProps} from '../../interfaces';
import {StyledImageProfile, StyledViewProfile} from './styles';

const Profile: FunctionComponent<ProfileProps> = props => {
  return (
    <StyledViewProfile style={props.imgContainerStyle}>
      <StyledImageProfile style={props.imgStyle} source={props.img} />
    </StyledViewProfile>
  );
};

export default Profile;
