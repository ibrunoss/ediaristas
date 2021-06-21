import React from "react";
import { TextFieldStyled, TextFieldStyledProps } from "./TextField.style";

export interface TextFieldProps extends TextFieldStyledProps {}

const TextField: React.FC<TextFieldProps> = (props) => (
  <TextFieldStyled variant="outlined" {...props} />
);

export default TextField;
