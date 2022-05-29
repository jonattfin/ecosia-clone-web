import { Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import styled from "@emotion/styled";

import {
  AppColor,
  Image,
  MainTitleDiv,
  MainSubtitleDiv,
  LinkDiv,
} from "../../../shared-components";
import * as Images from "./images";

export default function Component() {
  const imageProps = { width: 150, height: 0 };
  imageProps.height = imageProps.width * 0.6;

  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <MainTitleDiv>Why choose Ecosia?</MainTitleDiv>
          <MainSubtitleDiv>
            We put people and planet before profit
          </MainSubtitleDiv>
        </Grid>
        <Grid item md={12} xl={2}>
          <Image src={Images.ProfitsImage} alt="profits" {...imageProps} />
        </Grid>
        <Grid item md={12} xl={4}>
          <ContainerDiv>
            <TitleDiv>We’re a not-for-profit business</TitleDiv>
            <div>
              We dedicate 100% of our profits to climate action, with at least
              80% financing tree-planting projects.
            </div>
          </ContainerDiv>
        </Grid>
        <Grid item md={12} xl={2}>
          <Image src={Images.PrivacyImage} alt="privacy" {...imageProps} />
        </Grid>
        <Grid item md={12} xl={4}>
          <ContainerDiv>
            <TitleDiv>Ecosia is powered by 200% renewable energy</TitleDiv>
            <div>
              Our solar panels produce twice the amount of energy needed to
              power all searches with renewables.
            </div>
          </ContainerDiv>
        </Grid>
        <Grid item md={12} xl={2}>
          <Image src={Images.WorldImage} alt="world" {...imageProps} />
        </Grid>
        <Grid item md={12} xl={4}>
          <ContainerDiv>
            <TitleDiv>We always put your privacy first</TitleDiv>
            <div>
              We anonymize your searches and don’t create a profile of you.
              We’re interested in trees, not your data.
            </div>
          </ContainerDiv>
        </Grid>
        <Grid item md={12} xl={2}>
          <Image src={Images.CoinImage} alt="coin" {...imageProps} />
        </Grid>
        <Grid item md={12} xl={4}>
          <ContainerDiv>
            <TitleDiv>We are transparent about everything we do</TitleDiv>
            <div>
              We publish detailed financial reports and frequent updates from
              our tree planting projects.
            </div>
          </ContainerDiv>
        </Grid>
        <Grid item xs={12} xl={12}>
          <LinkDiv>
            <Link href="#">
              <a>
                Other reasons <ChevronRightIcon fontSize="small" />
              </a>
            </Link>
          </LinkDiv>
        </Grid>
        <Grid item xs={12} xl={12}>
          &nbsp;
        </Grid>
      </Grid>
    </section>
  );
}

// Styled Components

const ContainerDiv = styled.div`
  font-size: larger;
  padding-left: 20px;
`;

const TitleDiv = styled.div`
  color: ${AppColor.Teal};
  padding-bottom: 10px;
`;
