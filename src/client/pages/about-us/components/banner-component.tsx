import { Button, Grid } from "@mui/material";

import styles from "../about-us.module.scss";

export default function Component() {
  return (
    <section className={styles["banner-section"]}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <div className={styles["banner-container"]}>
            <div className={styles["main-title"]} data-test="banner-title">
            We believe in everyone&apos;s power to do good
            </div>
            <div>&nbsp;</div>
            <div>
              <Button variant="contained" data-test="add-ecosia-button">
                Add Ecosia to Firefox
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
