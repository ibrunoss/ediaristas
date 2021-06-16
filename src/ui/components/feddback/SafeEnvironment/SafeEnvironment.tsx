import React from "react";

import { SafeEnvironmentContainerStyled } from "./SafeEnvironment.style";

const SafeEnvironment: React.FC = () => (
  <SafeEnvironmentContainerStyled>
    Ambiente Seguro <i className="twf-lock" />
  </SafeEnvironmentContainerStyled>
);

export default SafeEnvironment;
