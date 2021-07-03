import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";

import SafeEnvironment from "ui/components/feddback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {
  FormElementsContainerStyled,
  ProfessionalsPaperStyled,
  ProfessionalsContainerStyled,
} from "@styles/pages/index.style";
import useIndexPages from "data/hooks/useIndex.pages";

export default function Home() {
  const {
    zipCode,
    setZipCode,
    zipCodeValid,
    error,
    searching,
    searchDone,
    searchProfessionalsByZipCode,
    professionals,
    remainingProfessionals,
  } = useIndexPages();
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
          <TextFieldMask
            mask="99999-999"
            label="Digite seu CEP"
            fullWidth
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: 220 }}
            disabled={!zipCodeValid || searching}
            onClick={() => searchProfessionalsByZipCode(zipCode)}
          >
            {searching ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainerStyled>
        {professionals.length > 0 ? (
          <ProfessionalsPaperStyled>
            <ProfessionalsContainerStyled>
              {professionals.map((professional, key) => (
                <UserInformation
                  key={key}
                  avatar={professional.photo}
                  description={professional.city}
                  name={professional.fullName}
                  rating={professional.rating}
                />
              ))}
            </ProfessionalsContainerStyled>
            <Container sx={{ textAlign: "center" }}>
              {remainingProfessionals > 0 && (
                <Typography sx={{ mt: 5 }}>
                  ...e mais {remainingProfessionals}{" "}
                  {remainingProfessionals > 1
                    ? "profissionais atendem"
                    : "profissional atende"}{" "}
                  ao seu endereço.
                </Typography>
              )}
              <Button variant="contained" color="secondary" sx={{ mt: 5 }}>
                Contratar um profissional
              </Button>
            </Container>
          </ProfessionalsPaperStyled>
        ) : (
          <>
            {searchDone && error == "" && (
              <Typography align="center" color="textPrimary">
                Ainda não temos nenhuma diarista disponível em sua região
              </Typography>
            )}
          </>
        )}
      </Container>
    </div>
  );
}
