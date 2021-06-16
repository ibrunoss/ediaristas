import { styled } from "@material-ui/core";

export const PageTitleStyled: React.FC = styled("div")`
  margin: 0;
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  font-weight: 400;
  transition: all 0.2s ease-in-out;

  * {
    font-size: inherit;
    font-weight: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: ${({ theme }) => `${theme.spacing(1.5)} 0`};
  }

  h1 {
    margin: 0;
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 600;
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};

    h1 {
      font-size: ${({ theme }) => theme.typography.h6.fontSize};
    }
  }
`;
