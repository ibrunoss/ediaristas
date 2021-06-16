import { ThemeProvider } from "@material-ui/core";
import Head from "next/head";

import theme from "ui/themes";
import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>e-diaristas</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
