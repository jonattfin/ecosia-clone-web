import { Fragment } from "react";

import * as Components from "./components";
import styles from "./mobile.module.scss";

export default function Component() {
  return (
    <section className={styles["mobile-section"]}>
      <Components.BannerComponent />
    </section>
  );
}
