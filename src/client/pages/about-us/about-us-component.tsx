import { Grid } from "@mui/material";

import * as Components from "./components";
import styles from "./about-us.module.scss";

export default function Component() {
  return (
    <section className={styles["about-us-section"]}>
      <Grid container>
        {/* section */}
        <Grid className={styles["alice-blue"]} item xs={12} xl={12}>
          <Components.BannerComponent />
        </Grid>
        {/* section */}

        {/* section */}
        <Grid className={styles["grey"]} item xl={3}>
          &nbsp;
        </Grid>
        <Grid className={styles["grey"]} item xs={12} xl={6}>
          <Components.SocialBusinessComponent />
        </Grid>
        <Grid className={styles["grey"]} item xl={3}>
          &nbsp;
        </Grid>
        {/* section */}

        {/* section */}
        <Grid item xl={3}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={6}>
          <Components.MeetTheTeamComponent />
        </Grid>
        <Grid item xl={3}>
          &nbsp;
        </Grid>
        {/* section */}

        {/* section */}
        <Grid className={styles["grey"]} item xl={3}>
          &nbsp;
        </Grid>
        <Grid className={styles["grey"]} item xs={12} xl={6}>
          <Components.HireComponent />
        </Grid>
        <Grid className={styles["grey"]} item xl={3}>
          &nbsp;
        </Grid>
        {/* section */}

        {/* section */}
        <Grid item xl={4}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={4}>
          <Components.ContactUsComponent />
        </Grid>
        <Grid item xl={4}>
          &nbsp;
        </Grid>
        {/* section */}
      </Grid>
    </section>
  );
}
