import Head from "next/head";

import * as Components from "./components";

export default function Component() {
  const title =
    "Learn more about our privacy policy and the data that we do collect";

  return (
    <section>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Components.ProtectPrivacyComponent />
    </section>
  );
}
