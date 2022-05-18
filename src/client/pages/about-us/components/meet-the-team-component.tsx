import { useState } from "react";
import { Button, Grid } from "@mui/material";

import styles from "../about-us.module.scss";

export default function Component() {
  const [play, setPlay] = useState(false);

  return (
    <section className={styles["meet-the-team-section"]}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <div className={styles["team-container"]}>
            {!play && (
              <>
                <div className={styles["main-title"]}>Step inside!</div>
                <div className={styles["main-subtitle"]}>
                  Meet the humans who make Ecosia and learn what it&apos;s like to
                  work here.
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => setPlay(true)}
                  >
                    Play
                  </Button>
                </div>
              </>
            )}
            {play && (
              <>
                <video
                  className={styles["movie-container"]}
                  controls
                  autoPlay={true}
                >
                  <source
                    src="https://d3fme2ivr1xlgj.cloudfront.net/240719_Ecosia_hiringvideo_subbed_titled.mp4"
                    type="video/mp4"
                  />
                </video>
              </>
            )}
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
