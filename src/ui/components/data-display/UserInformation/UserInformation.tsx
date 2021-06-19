import React from "react";

import {
  UserAvatarStyled,
  UserDescriptionStyled,
  UserInformationContainerStyled,
  UserNameStyled,
  UserRatingStyled,
} from "./UserInformation.style";

type UserInformationProps = {
  avatar: string;
  name: string;
  rating: number;
  description: string;
};

const UserInformation: React.FC<UserInformationProps> = ({
  avatar,
  description,
  name,
  rating,
}) => (
  <UserInformationContainerStyled>
    <UserAvatarStyled src={avatar}>
      {name[0].toLocaleUpperCase()}
    </UserAvatarStyled>
    <UserNameStyled>{name}</UserNameStyled>
    <UserRatingStyled readOnly value={rating} />
    <UserDescriptionStyled>{description}</UserDescriptionStyled>
  </UserInformationContainerStyled>
);

export default UserInformation;
