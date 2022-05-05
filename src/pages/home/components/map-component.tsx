import { Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

import styles from "../home.module.scss";

interface MapComponentProps {
  counter: number;
}

export default function Component({ counter }: MapComponentProps) {
  return (
    <section className={styles["map-section"]}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <div className={styles["main-title"]} data-test="map-title">
            Trees planted by ecosia users
          </div>
          <div className={styles["main-subtitle--kick"]}>{counter}</div>
        </Grid>
        <Grid item xs={12} xl={3}>
          <div className={styles["title"]}>15 Million</div>
          <div className={styles["content"]}>People using Ecosia</div>
        </Grid>
        <Grid item xs={12} xl={3}>
          <div className={styles["title"]}>500+</div>
          <div className={styles["content"]}>Native species</div>
        </Grid>
        <Grid item xs={12} xl={3}>
          <div className={styles["title"]}>30+</div>
          <div className={styles["content"]}>Countries</div>
        </Grid>
        <Grid item xs={12} xl={3}>
          <div className={styles["title"]}>60+</div>
          <div className={styles["content"]}>Active projects</div>
        </Grid>
        <Grid item xs={12} xl={12}>
          <div className={styles["link-container"]}>
            <Link href="#">
              <a data-test="discover-projects">
                Discover our projects <ChevronRightIcon fontSize="small" />
              </a>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} xl={12}>
          &nbsp;
        </Grid>
      </Grid>
    </section>
  );
}
