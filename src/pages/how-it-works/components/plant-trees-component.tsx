import { Button, Grid } from "@mui/material";

import styles from "../how-it-works.module.scss";

export default function Component() {
  return (
    <section className={styles["plant-trees-section"]}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <div className={styles["container"]}>
            <div className={styles["main-title"]}>
              Plant trees while you search the web
            </div>
            <div className={styles["separator"]}></div>
            <div>
              We use the profit we make from your searches to plant trees where
              they are needed most.{" "}
            </div>
            <div>
              Get the free browser extension and plant trees with every search.
            </div>
            <div className={styles["separator"]}></div>
            <div>
              <Button variant="contained">Add Ecosia to Firefox</Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
