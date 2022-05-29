import { Grid } from "@mui/material";
import styled from "@emotion/styled";

import { MainTitleDiv } from "../../../shared-components";

export default function Component() {
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <MainTitleDiv>Over 146 million trees planted</MainTitleDiv>
          <ContainerDiv>
            <div>
              <TitleDiv>{"December 2009"}</TitleDiv>
              <SubtitleDiv>{"1.1 sec"}</SubtitleDiv>
              <LineDiv />
              <TitleDiv>{"to plant a tree"}</TitleDiv>
            </div>
            <div>
              <TitleDiv>{"over"}</TitleDiv>
              <SubtitleDiv>{"15 million"}</SubtitleDiv>
              <LineDiv />
              <TitleDiv>{"active users"}</TitleDiv>
            </div>
            <div>
              <TitleDiv>{"over"}</TitleDiv>
              <SubtitleDiv>{"12,101,152"}</SubtitleDiv>
              <LineDiv />
              <TitleDiv>{"EUR invested"}</TitleDiv>
            </div>
            <div>
              <TitleDiv>{"over"}</TitleDiv>
              <SubtitleDiv>{"9000"}</SubtitleDiv>
              <LineDiv />
              <TitleDiv>{"planting sites"}</TitleDiv>
            </div>
          </ContainerDiv>
        </Grid>
      </Grid>
    </section>
  );
}

// Styled Components

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 20vh;
`;

const TitleDiv = styled.div`
  text-transform: uppercase;
  padding: 15px 0;
  text-align: center;
`;

const SubtitleDiv = styled.div`
  text-align: center;
`;

const LineDiv = styled.div`
  border: 3px solid #aab74f;
`;
