import { Grid } from "@mui/material";

import styles from "../how-it-works.module.scss";

export default function Component() {
  return (
    <section className={styles["graphics-section"]}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <div className={styles["main-title"]}>
            Over 146 million trees planted
          </div>
          <div className={styles["main-container"]}>
            <div>
              <div className={styles["title"]}>{"December 2009"}</div>
              <div className={styles["subtitle"]}>{"1.1 sec"}</div>
              <div className={styles["line"]} />
              <div className={styles["title"]}>{"to plant a tree"}</div>
            </div>
            <div>
              <div className={styles["title"]}>{"over"}</div>
              <div className={styles["subtitle"]}>{"15 million"}</div>
              <div className={styles["line"]} />
              <div className={styles["title"]}>{"active users"}</div>
            </div>
            <div>
              <div className={styles["title"]}>{"over"}</div>
              <div className={styles["subtitle"]}>{"12,101,152"}</div>
              <div className={styles["line"]} />
              <div className={styles["title"]}>{"EUR invested"}</div>
            </div>
            <div>
              <div className={styles["title"]}>{"over"}</div>
              <div className={styles["subtitle"]}>{"9000"}</div>
              <div className={styles["line"]} />
              <div className={styles["title"]}>{"planting sites"}</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
