import { Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import dynamic from "next/dynamic";

const PieComponent = dynamic(() => import("./pie-component"), {
  ssr: false
})

import styles from "../home.module.scss";

export default function Component() {
  return (
    <section className={styles["financial-section"]}>
      <Grid container spacing={2}>
        <Grid item xs={6} xl={6}>
          <div className={styles["main-title"]} data-test="reports-title">
            Monthly financial reports
          </div>
          <div className={styles["main-subtitle"]}>
            Our revenue in January 2022
          </div>
          <div className={styles["content"]}>
            Our monthly reports show how much ad revenue we made from your
            searches, how we spent it, and how many trees this helped us plant.
          </div>
        </Grid>
        <Grid item xs={0} xl={2}>
          &nbsp;
        </Grid>
        <Grid item xs={6} xl={4}>
          <div className={styles['pie-wrapper']}>
          <PieComponent/>
          </div>
        </Grid>
        <Grid item xs={12} xl={12}>
          <div className={styles["link-container"]}>
            <Link href="#">
              <a data-test="explore-reports">
                Explore our financial reports{" "}
                <ChevronRightIcon fontSize="small" />
              </a>
            </Link>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
