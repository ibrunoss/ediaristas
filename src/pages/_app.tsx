import { ThemeProvider } from "@material-ui/core";
import Head from "next/head";

import Header from "ui/components/surfaces/Header/Header";
import Footer from "ui/components/surfaces/Footer/Footer";
import theme from "ui/themes";
import { AppContainerStyled } from "@styles/pages/_app.style";
import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/fonts/tw-icons/css/treinaweb-icons.css" />
        <title>e-diaristas</title>
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainerStyled>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AppContainerStyled>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
