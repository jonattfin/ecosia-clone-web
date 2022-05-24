import { Grid } from "@mui/material";

import * as Components from "./components";
import styles from "./home.module.scss";

interface HomeComponentProps {
  counter: number;
  onSearch: (query: string) => void;
}

export default function Component({ counter, onSearch }: HomeComponentProps) {
  return (
    <section className={styles["home-section"]}>
      <Grid container>
        {/* Search section */}
        <Grid item xl={3}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={6}>
          <Components.SearchComponent {...{ counter, onSearch }} />
        </Grid>
        <Grid item xl={3}>
          &nbsp;
        </Grid>
        {/* Search section */}

        {/* Countries section */}
        <Grid className={styles["alice-blue"]} item xl={3}>
          &nbsp;
        </Grid>
        <Grid className={styles["alice-blue"]} item xs={12} xl={6}>
          <Components.CountriesComponent />
        </Grid>
        <Grid className={styles["alice-blue"]} item xl={3}>
          &nbsp;
        </Grid>
        {/* Countries section */}

        {/* Map section */}
        <Grid item xl={3}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={6}>
          <Components.MapComponent {...{ counter }} />
        </Grid>
        <Grid item xl={3}>
          &nbsp;
        </Grid>
        {/* Map section  */}

        {/* Financial section */}
        <Grid className={styles["alice-blue"]} item xl={3}>
          &nbsp;
        </Grid>
        <Grid className={styles["alice-blue"]} item xl={6}>
          <Components.FinancialComponent />
        </Grid>
        <Grid className={styles["alice-blue"]} item xl={3}>
          &nbsp;
        </Grid>
        {/* Financial section */}

        {/* Why choose us section */}
        <Grid item xl={3}>
          &nbsp;
        </Grid>
        <Grid item xl={6}>
          <Components.WhyChooseUsComponent />
        </Grid>
        <Grid item xl={3}>
          &nbsp;
        </Grid>
        {/* Why choose us section */}
        <Grid item xs={12} xl={12}>
          <section>
            <Components.JoinUsComponent />
          </section>
        </Grid>
      </Grid>
    </section>
  );
}
