import { Grid } from "@mui/material";

import { Image } from "../../../shared-components";
import * as Images from "./images";
import styles from "../how-it-works.module.scss";

export default function Component() {
  const imageProps = { width: 200, height: 0 };
  imageProps.height = imageProps.width * 0.5;

  return (
    <section className={styles["how-it-works-section"]}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <div className={styles["parent-container"]}>
            <div className={styles["main-title"]}>How it works</div>
            <div className={styles["child-container"]}>
              <div className={styles["image--centered"]}>
                <Image
                  className={styles["image"]}
                  src={Images.AdsImage}
                  alt="tdlr"
                  {...imageProps}
                ></Image>
                <div className={styles["content"]}>
                  Search ads generate income for Ecosia.
                </div>
              </div>
              <div className={styles["image--centered"]}>
                <Image
                  className={styles["image"]}
                  src={Images.EcosiaImage}
                  alt="tdlr"
                  {...imageProps}
                ></Image>
                <div className={styles["content"]}>
                  You search the web with Ecosia.
                </div>
              </div>
              <div className={styles["image--centered"]}>
                <Image
                  className={styles["image"]}
                  src={Images.IncomeImage}
                  alt="tdlr"
                  {...imageProps}
                ></Image>
                <div className={styles["content"]}>
                  Ecosia uses this income to plant trees.
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
