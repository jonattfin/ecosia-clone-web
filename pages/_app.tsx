import type { AppProps } from "next/app";
import { Container } from "@mui/material";

import * as SharedComponents from "../src/shared-components";

import "../styles/globals.css";
import { Fragment } from "react";

export default function Component({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <header>
        <SharedComponents.Header {...{}} />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <Container>
        <section>
          <SharedComponents.Links />
        </section>
        <footer>
          <SharedComponents.Footer />
        </footer>
      </Container>
    </Fragment>
  );
}
