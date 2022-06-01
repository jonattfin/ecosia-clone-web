import Head from "next/head";

import * as Components from "./components";

export default function Component() {
  const title = "Ecosia for mobile";

  return (
    <section>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Components.BannerComponent />
    </section>
  );
}
