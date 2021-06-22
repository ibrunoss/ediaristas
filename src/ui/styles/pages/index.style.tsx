import { styled, Paper } from "@material-ui/core";

export const FormElementsContainerStyled = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 650px;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const ProfessionalsPaperStyled = styled(Paper)`
  margin: 0 auto ${({ theme }) => theme.spacing(10)};
  padding: ${({ theme }) => theme.spacing(7)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    &.MuiPaper-root {
      padding: 0;
      box-shadow: none;
    }
  }
`;
