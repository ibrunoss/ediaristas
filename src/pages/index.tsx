import { Button, Typography, Container } from "@material-ui/core";

import SafeEnvironment from "ui/components/feddback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { FormElementsContainerStyled } from "@styles/pages/index.style";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle>
        <>
          <h1>Conheça os profissionais</h1>
          <h2>
            Preencha seu endereço e veja todos os profissionais da sua
            localidade
          </h2>
        </>
      </PageTitle>
      <Container>
        <FormElementsContainerStyled>
          <TextFieldMask mask="99999-999" label="Digite seu CEP" fullWidth />
          <Typography color="error">CEP inválido</Typography>
          <Button variant="contained" color="secondary" sx={{ width: 220 }}>
            Buscar
          </Button>
        </FormElementsContainerStyled>
        <UserInformation
          avatar="https://github.com/89bsilva.png"
          description="Tatuí"
          name="Bruno"
          rating={5}
        />
      </Container>
    </div>
  );
}
