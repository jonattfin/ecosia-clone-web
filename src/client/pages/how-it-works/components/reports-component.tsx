import { Button, Grid } from "@mui/material";
import Image from "next/image";

import * as Images from "./images";
import styles from "../how-it-works.module.scss";

export default function Component({ showImages = true }) {
  return (
    <section className={styles["reports-section"]}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <div className={styles["container"]}>
            <div>
              {showImages && (
                <Image
                  src={Images.ReportsImage}
                  alt="transparency"
                  width={100}
                  height={100}
                />
              )}
            </div>
            <div className={styles["main-title"]}>
              We know trust has to be earned
            </div>
            <div className={styles["content"]}>
              That is why we publish our monthly financial reports and tree
              planting receipts. <br /> This way you can hold us accountable as
              we follow our journey to a reforested world.
            </div>
            <div>
              <Button variant="contained">View Reports</Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
