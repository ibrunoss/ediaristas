import { Container } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const SafeEnvironmentContainerStyled: React.FC = styled(Container)`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  font-size: 12px;
`;
