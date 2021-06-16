import React from "react";

import { PageTitleStyled } from "./PageTitle.style";

type PageTitleProps = {
  children: React.ReactNode;
};

const PageTitle: React.FC<PageTitleProps> = ({ children }) => (
  <PageTitleStyled>{children}</PageTitleStyled>
);

export default PageTitle;
