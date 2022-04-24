import { Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from 'next/image';

import { AboveTitle, Subtitle } from "./styled-components";
import * as Images from "./images";

const GridItemWrapper = styled.div`
  font-size: larger;
  padding-left: 20px;
`;

const GridItemTitle = styled.div`
  color: teal;
  padding-bottom: 10px;
`;

const DivLinkWrapper = styled.div`
  text-align: right;
  padding-right: 20px;
`;

export default function Component() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <AboveTitle>Why choose Ecosia?</AboveTitle>
        <Subtitle>We put people and planet before profit</Subtitle>
      </Grid>
      <Grid item xs={12} xl={1}>
        <Image src={Images.ProfitsImage} alt="profits" />
      </Grid>
      <Grid item xs={12} xl={5}>
        <GridItemWrapper>
          <GridItemTitle>We’re a not-for-profit business</GridItemTitle>
          <div>
            We dedicate 100% of our profits to climate action, with at least 80%
            financing tree-planting projects.
          </div>
        </GridItemWrapper>
      </Grid>
      <Grid item xs={12} xl={1}>
        <Image src={Images.PrivacyImage} alt="privacy" />
      </Grid>
      <Grid item xs={12} xl={5}>
        <GridItemWrapper>
          <GridItemTitle>
            Ecosia is powered by 200% renewable energy
          </GridItemTitle>
          <div>
            Our solar panels produce twice the amount of energy needed to power
            all searches with renewables.
          </div>
        </GridItemWrapper>
      </Grid>
      <Grid item xs={12} xl={1}>
        <Image src={Images.WorldImage} alt="world" />
      </Grid>
      <Grid item xs={12} xl={5}>
        <GridItemWrapper>
          <GridItemTitle>We always put your privacy first</GridItemTitle>
          <div>
            We anonymize your searches and don’t create a profile of you. We’re
            interested in trees, not your data.
          </div>
        </GridItemWrapper>
      </Grid>
      <Grid item xs={12} xl={1}>
        <Image src={Images.CoinImage} alt="coin" />
      </Grid>
      <Grid item xs={12} xl={5}>
        <GridItemWrapper>
          <GridItemTitle>
            We are transparent about everything we do
          </GridItemTitle>
          <div>
            We publish detailed financial reports and frequent updates from our
            tree planting projects.
          </div>
        </GridItemWrapper>
      </Grid>
      <Grid item xs={12} xl={12}>
        <DivLinkWrapper>
          <Link href="#">
            <a>
              Other reasons <ChevronRightIcon fontSize="small" />
            </a>
          </Link>
        </DivLinkWrapper>
      </Grid>
      <Grid item xs={12} xl={12}>
        &nbsp;
      </Grid>
    </Grid>
  );
}
