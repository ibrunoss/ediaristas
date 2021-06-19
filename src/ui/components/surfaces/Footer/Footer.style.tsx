import { styled, Container, Typography } from "@material-ui/core";

export const FooterStyled = styled("footer")`
  margin-top: auto;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.main)};
  padding: ${({ theme }) => theme.spacing(4)} 0;
`;

export const FooterContainerStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(5)};
  flex-wrap: wrap;
`;

export const FooterTitleStyled = styled((props) => (
  <Typography component="h2" variant="body2" {...props} />
))`
  font-weight: bold;
`;
