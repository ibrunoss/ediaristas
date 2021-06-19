import { styled } from "@material-ui/core";

export const FooterStyled = styled("footer")`
  margin-top: auto;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.main)};
  padding: ${({ theme }) => theme.spacing(4)} 0;
`;
