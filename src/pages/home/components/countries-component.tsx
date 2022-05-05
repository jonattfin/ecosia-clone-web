import { Grid } from "@mui/material";
import Image from "next/image";

import * as Images from "./images";
import styles from "./home.module.scss";

export default function Component() {
  return (
    <section className={styles["countries-section"]}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <div className={styles["main-title"]} data-test="countries-title">
            Where are your trees being planted?
          </div>
          <div
            className={styles["main-subtitle"]}
            data-test="countries-subtitle"
          >
            We plant in 30+ countries with local organizations
          </div>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Image src={Images.BrazilImage} alt="brazil" />
          <div className={styles.name}>Brazil</div>
          <div className={styles.text}>
            Your trees in Brazil protect thousands of endangered plants and
            animals.
          </div>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Image src={Images.BurkinaFasoImage} alt="burkina faso" />
          <div className={styles.name}>Burkina Faso</div>
          <div className={styles.text}>
            By planting trees in Burkina Faso, you restore desertified land to
            its former fertility.
          </div>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Image src={Images.IndonesiaImage} alt="indonesia" />
          <div className={styles.name}>Indonesia</div>
          <div className={styles.text}>
            In Indonesia, your searches bring back forests on former palm oil
            plantations while creating alternative sources of income.
          </div>
        </Grid>
        <Grid item>&nbsp;</Grid>
      </Grid>
    </section>
  );
}
