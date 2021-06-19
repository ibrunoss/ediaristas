import Head from "next/head";

import SafeEnvironment from "ui/components/feddback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

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
      <UserInformation
        avatar="https://github.com/89bsilva.png"
        description="Tatuí"
        name="Bruno"
        rating={5}
      />
    </div>
  );
}
