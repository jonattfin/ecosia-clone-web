import { Grid } from "@mui/material";
import Image from "next/image";

import * as Images from "./images";
import styles from "../mobile.module.scss";

export default function Component() {
  return (
    <section className={styles["banner-section"]}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <div className={styles["container"]}>
            <div className={styles["main-title"]}>Ecosia for Mobile</div>
            <div className={styles["main-subtitle"]}>
              Plant trees while searching the web <br /> with your mobile phone
              or tablet.
            </div>
            <div>
              <Image src={Images.AppStoreImage} alt={"app store"} />
              <Image src={Images.PlayStoreImage} alt={"play store"} />
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
