import { useState } from "react";
import { Button, Grid } from "@mui/material";
import styled from "@emotion/styled";

import { AboveTitle, Subtitle } from "./styled-components";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30vh;
`;

const MovieWrapper = styled.video`
  max-width: 25vw;
`;

const ExtraSubtitle = styled(Subtitle)`
  text-align: center;
`;

export default function Component({}) {
  const [play, setPlay] = useState(false);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <DivContainer>
          {!play && (
            <>
              <AboveTitle>Step inside!</AboveTitle>
              <ExtraSubtitle>
                Meet the humans who make Ecosia and learn what it's like to work
                here.
              </ExtraSubtitle>
              <div>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => setPlay(true)}
                >
                  Play
                </Button>
              </div>
            </>
          )}
          {play && (
            <>
              <MovieWrapper controls autoPlay={true}>
                <source
                  src="https://d3fme2ivr1xlgj.cloudfront.net/240719_Ecosia_hiringvideo_subbed_titled.mp4"
                  type="video/mp4"
                />
              </MovieWrapper>
            </>
          )}
        </DivContainer>
      </Grid>
    </Grid>
  );
}
