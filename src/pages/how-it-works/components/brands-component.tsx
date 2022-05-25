import { Grid } from "@mui/material";

import { Image } from "../../../shared-components";
import * as Images from "./images";
import styles from "../how-it-works.module.scss";

export default function Component() {
  const imageProps = { width: 100, height: 0 };
  imageProps.height = imageProps.width * 0.5;

  return (
    <section className={styles["brands-section"]}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <div className={styles["brands-container"]}>
            {getBrands().map((brand, index) => (
              <Image
                src={brand}
                key={`brand_image_${index}`}
                alt="tdlr"
                {...imageProps}
              ></Image>
            ))}
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

function getBrands() {
  const {
    UpWorthyImage,
    ScientificImage,
    GuardianImage,
    SalonImage,
    ForbesImage,
  } = Images;

  return [
    UpWorthyImage,
    ScientificImage,
    GuardianImage,
    SalonImage,
    ForbesImage,
  ];
}
