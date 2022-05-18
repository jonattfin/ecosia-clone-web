import { Grid } from "@mui/material";

import * as Components from "./components";
import styles from "./how-it-works.module.scss";

export default function Component() {
  return (
    <section className={styles["how-it-works-section"]}>
      <Grid container>
        <Grid className={styles["alice-blue"]} item xl={4}>
          &nbsp;
        </Grid>
        <Grid className={styles["alice-blue"]} item xs={12} xl={4}>
          <Components.PlantTreesComponent />
        </Grid>
        <Grid className={styles["alice-blue"]} item xl={4}>
          &nbsp;
        </Grid>

        {/* Brands section */}
        <Grid item xs={12} xl={12}>
          <Components.BrandsComponent />
        </Grid>
        {/* Brands section */}

        {/* How it works section */}
        <Grid item xl={4}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={4}>
          <Components.HowItWorksComponent />
        </Grid>
        <Grid item xl={4}>
          &nbsp;
        </Grid>
        {/* How it works section */}

        {/* Graphics section */}
        <Grid className={styles["alice-blue"]} item xl={4}>
          &nbsp;
        </Grid>
        <Grid className={styles["alice-blue"]} item xs={12} xl={4}>
          <Components.GraphicsComponent />
        </Grid>
        <Grid className={styles["alice-blue"]} item xl={4}>
          &nbsp;
        </Grid>
        {/* Graphics section */}

        {/* Reports section */}
        <Grid item xl={4}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={4}>
          <Components.ReportsComponent />
        </Grid>
        <Grid item xl={4}>
          &nbsp;
        </Grid>
        {/* Reports section */}
      </Grid>
    </section>
  );
}
