import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";

import images from "./images";
import styles from "./links.module.scss";

const Links = () => {
  return (
    <div className={styles.links}>
      <Grid container spacing={2}>
        <Grid item xs={2} xl={2}>
          <div>
            <Image
              className={styles["image-wrapper"]}
              src={images.corporationImage}
              alt="b corporation"
            ></Image>
          </div>
        </Grid>
        <Grid item xs={8} xl={8}>
          <div className={styles.container}>
            <div>
              <div className={styles.title}>SITEMAP</div>
              <div>
                <a href="#id">News</a>
              </div>
              <div>
                <a href="#id">How Ecosia works</a>
              </div>
              <div>
                <a href="#id">About us</a>
              </div>
              <div>
                <a href="#id">Mobile app</a>
              </div>
              <div>
                <a href="#id">Privacy</a>
              </div>
              <div>
                <a href="#id">Settings</a>
              </div>
            </div>
            <div>
              <div className={styles.title}>Resources</div>
              <div>
                <a href="#id">FAQ</a>
              </div>
              <div>
                <a href="#id">Advertise on Ecosia</a>
              </div>
              <div>
                <a href="#id">Financial reports</a>
              </div>
              <div>
                <a href="#id">Blog</a>
              </div>
              <div>
                <a href="#id">Shop</a>
              </div>
              <div>
                <a href="#id">Press</a>
              </div>
              <div>
                <a href="#id">Jobs</a>
              </div>
            </div>
            <div>
              <div className={styles.title}>Imprint</div>
              <div>
                Ecosia GmbH Schinkestraße 9
                <br />
                12047 Berlin, Germany
                <br />
                Chairman Christian Kroll
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={2} xl={2}>
          <div className={styles.title}>Apps</div>
          <div>
            <Image
              className={styles["image-wrapper"]}
              src={images.appStoreImage}
              alt="app store"
            />
          </div>
          <div>
            <Image
              className={styles["image-wrapper"]}
              src={images.playStoreImage}
              alt="play store"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Links;
