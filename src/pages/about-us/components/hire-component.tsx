import { Button, Grid } from "@mui/material";

import styles from "../about-us.module.scss";

export default function Component() {
  return (
    <section className={styles["hire-section"]}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <div className={styles["hire-container"]}>
            <div className={styles["main-title"]}>We&apos;re hiring!</div>
            <div className={styles["main-subtitle"]}>
              Want to help change the world? Let&apos;s team up. <br />
              Apply to help us build great products and services that can make
              the world a more sustainable place. <br />
              We can&apos;t wait to hear from you.
            </div>
            <div>
              <Button variant="contained">See openings</Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
