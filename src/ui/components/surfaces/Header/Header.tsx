import React from "react";
import { Toolbar, Container } from "@material-ui/core";

import { HeaderAppBarStyled, HeaderLogoStyled } from "./Header.style";

const Header: React.FC = () => (
  <HeaderAppBarStyled position="sticky">
    <Toolbar component={Container}>
      <HeaderLogoStyled src={"/img/logos/logo.svg"} />
    </Toolbar>
  </HeaderAppBarStyled>
);

export default Header;
