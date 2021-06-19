import { styled } from "@material-ui/core";
import { AppBar } from "@material-ui/core";

export const HeaderAppBarStyled = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

  .MuiToolbar-root {
    display: flex;
    justify-content: center;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: 100px;
      justify-content: start;
    }
  }
`;

export const HeaderLogoStyled = styled("img")`
  height: 25px;
  transition: all 0.2s ease-in-out;

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 47px;
  }
`;
