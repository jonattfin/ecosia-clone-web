import { Grid } from "@mui/material";
import styled from "@emotion/styled";

import { AboveTitle } from "./styled-components";

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 20vh;
`;

const DivTitle = styled.div`
  text-transform: uppercase;
  padding: 15px 0;
  text-align: center;
`;

const DivLine = styled.div`
  border: 3px solid #aab74f;
`;

const DivSubtitle = styled.div`
  text-align: center;
`;

const AboveTitleExtra = styled(AboveTitle)`
  text-align: center;
`;

export default function Component({}) {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <AboveTitleExtra>Over 146 million trees planted</AboveTitleExtra>
          <DivContainer>
            <div>
              <DivTitle>{"December 2009"}</DivTitle>
              <DivSubtitle>{"1.1 sec"}</DivSubtitle>
              <DivLine />
              <DivTitle>{"to plant a tree"}</DivTitle>
            </div>
            <div>
              <DivTitle>{"over"}</DivTitle>
              <DivSubtitle>{"15 million"}</DivSubtitle>
              <DivLine />
              <DivTitle>{"active users"}</DivTitle>
            </div>
            <div>
              <DivTitle>{"over"}</DivTitle>
              <DivSubtitle>{"12,101,152"}</DivSubtitle>
              <DivLine />
              <DivTitle>{"EUR invested"}</DivTitle>
            </div>
            <div>
              <DivTitle>{"over"}</DivTitle>
              <DivSubtitle>{"9000"}</DivSubtitle>
              <DivLine />
              <DivTitle>{"planting sites"}</DivTitle>
            </div>
          </DivContainer>
        </Grid>
      </Grid>
    </div>
  );
}
