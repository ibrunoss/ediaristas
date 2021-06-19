import { styled, Avatar, Rating } from "@material-ui/core";

export const UserInformationContainerStyled = styled("div")`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "avatar name"
    "avatar rating"
    "avatar description";
  background-color: ${({ theme }) => theme.palette.grey[50]};
  padding: ${({ theme }) => theme.spacing(3)};
  align-items: center;
  gap: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(2)}`};
`;

export const UserNameStyled = styled("div")`
  grid-area: name;
  font-weight: bolder;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const UserDescriptionStyled = styled("div")`
  grid-area: description;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const UserAvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;

export const UserRatingStyled = styled(Rating)`
  grid-area: rating;
  font-size: ${({ theme }) => theme.spacing(1.75)};
`;
