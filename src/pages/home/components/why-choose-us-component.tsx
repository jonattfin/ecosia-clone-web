import { Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import Image from "next/image";

import * as Images from "./images";
import styles from "./home.module.scss";

export default function Component() {
  return (
    <section className={styles["why-choose-us-section"]}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <div className={styles["main-title"]}>Why choose Ecosia?</div>
          <div className={styles["main-subtitle"]}>
            We put people and planet before profit
          </div>
        </Grid>
        <Grid item xs={12} xl={1}>
          <Image src={Images.ProfitsImage} alt="profits" />
        </Grid>
        <Grid item xs={12} xl={5}>
          <div className={styles["item-container"]}>
            <div className={styles["item-title"]}>
              We’re a not-for-profit business
            </div>
            <div>
              We dedicate 100% of our profits to climate action, with at least
              80% financing tree-planting projects.
            </div>
          </div>
        </Grid>
        <Grid item xs={12} xl={1}>
          <Image src={Images.PrivacyImage} alt="privacy" />
        </Grid>
        <Grid item xs={12} xl={5}>
          <div className={styles["item-container"]}>
            <div className={styles["item-title"]}>
              Ecosia is powered by 200% renewable energy
            </div>
            <div>
              Our solar panels produce twice the amount of energy needed to
              power all searches with renewables.
            </div>
          </div>
        </Grid>
        <Grid item xs={12} xl={1}>
          <Image src={Images.WorldImage} alt="world" />
        </Grid>
        <Grid item xs={12} xl={5}>
          <div className={styles["item-container"]}>
            <div className={styles["item-title"]}>
              We always put your privacy first
            </div>
            <div>
              We anonymize your searches and don’t create a profile of you.
              We’re interested in trees, not your data.
            </div>
          </div>
        </Grid>
        <Grid item xs={12} xl={1}>
          <Image src={Images.CoinImage} alt="coin" />
        </Grid>
        <Grid item xs={12} xl={5}>
          <div className={styles["item-container"]}>
            <div className={styles["item-title"]}>
              We are transparent about everything we do
            </div>
            <div>
              We publish detailed financial reports and frequent updates from
              our tree planting projects.
            </div>
          </div>
        </Grid>
        <Grid item xs={12} xl={12}>
          <div className={styles["link-container"]}>
            <Link href="#">
              <a>
                Other reasons <ChevronRightIcon fontSize="small" />
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
