import { Button } from "@mui/material";

import styles from "./home.module.scss";

export default function Component() {
  return (
    <section className={styles["join-us-section"]}>
      <div className={styles["main-subtitle"]} data-test="join-us-title">
        Join 15 million people who already use Ecosia
      </div>
      <div>&nbsp;</div>
      <div>
        <Button color="primary" variant="contained" data-test="share-ecosia">
          Share Ecosia
        </Button>
      </div>
    </section>
  );
}
