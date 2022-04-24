import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

// import PieComponent from "./pie";
import { AboveTitle, Subtitle } from "./styled-components";

const PieContainer = styled.div`
  height: 20vh;
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;

const DivLinkWrapper = styled.div`
  text-align: right;
  padding-top: 10px;
  padding-right: 20px;
`;

const DivTextContent = styled.div`
  padding-top: 20px;
  font-size: larger;
`;

export default function Component({}) {
  return (
    <DivContainer>
      <Grid container spacing={2}>
        <Grid item xs={6} xl={6}>
          <AboveTitle data-test="reports-title">
            Monthly financial reports
          </AboveTitle>
          <Subtitle>Our revenue in January 2022 </Subtitle>
          <DivTextContent>
            Our monthly reports show how much ad revenue we made from your
            searches, how we spent it, and how many trees this helped us plant.
          </DivTextContent>
        </Grid>
        <Grid item xs={6} xl={6}>
          <PieContainer>
            {/* <PieComponent /> */}
          </PieContainer>
        </Grid>
        <Grid item xs={12} xl={12}>
          <DivLinkWrapper>
            <Link href="#">
              <a data-test="explore-reports">
                Explore our financial reports{" "}
                <ChevronRightIcon fontSize="small" />
              </a>
            </Link>
          </DivLinkWrapper>
        </Grid>
      </Grid>
    </DivContainer>
  );
}
