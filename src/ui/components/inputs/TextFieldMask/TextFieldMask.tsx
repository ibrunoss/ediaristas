import React from "react";
import InputMask from "react-input-mask";

import TextField, {
  TextFieldProps,
} from "ui/components/inputs/TextField/TextField";

export interface TextFieldMaskProps extends TextFieldProps {
  mask: string;
}
const TextFieldMask: React.FC<TextFieldMaskProps> = ({ mask, ...props }) => (
  <InputMask mask={mask}>{() => <TextField {...props} />}</InputMask>
);

export default TextFieldMask;
