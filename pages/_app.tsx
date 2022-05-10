import type { AppProps } from "next/app";
import { Container } from "@mui/material";
import { Fragment, useState } from "react";

import * as SharedComponents from "../src/shared-components";
import { TreesContext } from "../src/context";

import "../styles/globals.css";

export default function Component({ Component, pageProps }: AppProps) {
  const [numberOfTrees, setNumberOfTrees] = useState(0);

  const incrementTreeCount = () => {
    setNumberOfTrees((prevValue) => prevValue + 1);
  };

  return (
    <Fragment>
      <TreesContext.Provider value={numberOfTrees}>
        <header>
          <SharedComponents.Header {...{}} />
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
    </Fragment>
  );
}
