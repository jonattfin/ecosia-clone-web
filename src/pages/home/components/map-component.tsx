import { Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import styled from "@emotion/styled";
import {
  AppColor,
  LinkDiv,
  MainTitleDiv,
  MainSubtitleDiv,
  MainSubtitleKickDiv,
} from "../../../shared-components";

export interface MapComponentProps {
  counter: number;
}

export default function Component({ counter }: MapComponentProps) {
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <MainTitleDiv data-test="map-title">
            Trees planted by ecosia users
          </MainTitleDiv>
          <MainSubtitleKickDiv>{counter}</MainSubtitleKickDiv>
        </Grid>
        <Grid item xs={12} xl={3}>
          <TitleDiv>15 Million</TitleDiv>
          <ContentDiv>People using Ecosia</ContentDiv>
        </Grid>
        <Grid item xs={12} xl={3}>
          <TitleDiv>500+</TitleDiv>
          <ContentDiv>Native species</ContentDiv>
        </Grid>
        <Grid item xs={12} xl={3}>
          <TitleDiv>30+</TitleDiv>
          <ContentDiv>Countries</ContentDiv>
        </Grid>
        <Grid item xs={12} xl={3}>
          <TitleDiv>60+</TitleDiv>
          <ContentDiv>Active projects</ContentDiv>
        </Grid>
        <Grid item xs={12} xl={12}>
          <LinkDiv>
            <Link href="/blog">
              <a data-test="discover-projects">
                Discover our projects <ChevronRightIcon fontSize="small" />
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

const TitleDiv = styled.div`
  font-size: x-large;
  padding-left: 20px;
  border-left: 5px solid ${AppColor.Teal};
`;

const ContentDiv = styled.div`
  padding-left: 20px;
  border-left: 5px solid ${AppColor.Teal};
`;
