import { Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";

import {
  MainTitleDiv,
  MainSubtitleDiv,
  LinkDiv,
} from "../../../shared-components";

const PieComponent = dynamic(() => import("./pie-component"), {
  ssr: false,
});

export default function Component() {
  return (
    <MainSection>
      <Grid container spacing={2}>
        <Grid item xs={6} xl={6}>
          <MainTitleDiv data-test="reports-title">
            Monthly financial reports
          </MainTitleDiv>
          <MainSubtitleDiv>Our revenue in January 2022</MainSubtitleDiv>
          <ContentDiv>
            Our monthly reports show how much ad revenue we made from your
            searches, how we spent it, and how many trees this helped us plant.
          </ContentDiv>
        </Grid>
        <Grid item xs={0} xl={2}>
          &nbsp;
        </Grid>
        <Grid item xs={6} xl={4}>
          <PieContainerDiv>
            <PieComponent />
          </PieContainerDiv>
        </Grid>
        <Grid item xs={12} xl={12}>
          <LinkDiv>
            <Link href="#">
              <a data-test="explore-reports">
                Explore our financial reports{" "}
                <ChevronRightIcon fontSize="small" />
              </a>
            </Link>
          </LinkDiv>
        </Grid>
      </Grid>
    </MainSection>
  );
}

// Styled Components

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const ContentDiv = styled.div`
  padding-top: 20px;
  font-size: larger;
`;

const PieContainerDiv = styled.div`
  width: 300px;
  height: 300px;
`;
