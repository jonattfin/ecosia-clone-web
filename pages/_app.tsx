import type { AppProps } from "next/app";
import { Container } from "@mui/material";
import { Fragment, useState } from "react";

import * as SharedComponents from "../src/shared-components";
import { Language, LanguageContext, TreesContext } from "../src/providers/context";

import "../styles/globals.css";

export default function AppComponent({ Component, pageProps }: AppProps) {
  const [numberOfTrees, setNumberOfTrees] = useState(0);
  const [language, setLanguage] = useState(Language.English);

  const incrementTreeCount = () => {
    setNumberOfTrees((prevValue) => prevValue + 1);
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <Fragment>
      <LanguageContext.Provider value={language}>
        <TreesContext.Provider value={numberOfTrees}>
          <header>
            <SharedComponents.Header {...{ changeLanguage }} />
          </header>
          <main>
            <Component {...pageProps} {...{ incrementTreeCount }} />
          </main>
          <Container>
            <section>
              <SharedComponents.Links />
            </section>
            <footer>
              <SharedComponents.Footer />
            </footer>
          </Container>
        </TreesContext.Provider>
      </LanguageContext.Provider>
    </Fragment>
  );
}
