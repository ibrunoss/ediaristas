import { ThemeProvider } from "@material-ui/core";

import theme from "ui/themes";
import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
