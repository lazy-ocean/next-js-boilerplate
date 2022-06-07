import "../../styles/globals.css";
import Main from "../components/Main/Main";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../theme";

const MyApp = () => {
  /* let testLintIsWorking = ""; */
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  );
};

export default MyApp;
