import { useRouter } from "next/router";
import LinearProgress from "@mui/material/LinearProgress";
import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

// import api from "../../api";

import * as Images from "./images";
import styles from "./project.module.scss";

export default () => {
  const router = useRouter();
  const { pid } = router.query;

  const project = {
    image:
      "https://blog.ecosia.org/content/images/size/w1200/2021/08/Thailand_header.png",
  };

  return (
    <div className={styles.project}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={4}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={4}>
          <Content isLoading={false} isError={false}>
            <div className={styles.container}>
              <img src={project.image}></img>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} xl={4}>
                  <p>trees planted</p>
                  <p className={styles.teal}>9000</p>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <p>hectares restored</p>
                  <p className={styles.orange}>updating</p>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <p>since</p>
                  <p className={styles.green}>2001</p>
                </Grid>
                <Grid item xs={12} xl={12}>
                  <h1>From monoculture to sustainable rubber farming</h1>
                </Grid>
                <Grid item xs={12} xl={6}>
                  <p>
                    In Thailand, we are partnering with the Prince of Songkhla
                    University and Einhorn to support rubber farmers who are
                    interested in transforming their monocultures into
                    sustainable agroforestry systems.{" "}
                  </p>
                </Grid>
                <Grid item xs={12} xl={6}>
                  <Image src={Images.CountryMapImage}></Image>
                </Grid>
                {showExtraInfo()}
              </Grid>
            </div>
          </Content>
        </Grid>
        <Grid item xs={12} xl={4}>
          &nbsp;
        </Grid>
      </Grid>
    </div>
  );
};

interface ContentProps {
  children?: React.ReactNode;
  isLoading: boolean;
  isError: any;
}

function showExtraInfo() {
  const extraItems = [
    {
      image: Images.PartnersImage,
      title: "Partners",
      subtitle: "Prince of Songkhla University/Einhorn",
    },
    {
      image: Images.PlantingMethodImage,
      title: "Planting method",
      subtitle: "Nursery, intercropping",
    },
    {
      image: Images.PlantingSeasonImage,
      title: "Planting season",
      subtitle: "August to January",
    },
    {
      image: Images.MainThreatsImage,
      title: "Main threats",
      subtitle: "Monoculture rubber plantations",
    },
    {
      image: Images.WildlifeProtectedImage,
      title: "Wildlife protected",
      subtitle: "updating...",
    },
    {
      image: Images.ChallengesImage,
      title: "Challenges",
      subtitle: "global demand for rubber at competetitive prices",
    },
  ];

  return (
    <React.Fragment>
      {extraItems.map((item, index) => (
        <Grid item xs={12} xl={4} key={`extra-item-${index}`}>
          <Image src={item.image}></Image>
          <p>{item.title}</p>
          <p>{item.subtitle}</p>
        </Grid>
      ))}
    </React.Fragment>
  );
}

function Content(props: ContentProps) {
  const { children, isLoading, isError } = props;

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <div>{children}</div>;
}
