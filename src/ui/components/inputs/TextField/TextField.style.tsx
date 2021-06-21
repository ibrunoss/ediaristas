import { styled, TextField, StandardTextFieldProps } from "@material-ui/core";

export interface TextFieldStyledProps extends StandardTextFieldProps {}

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
