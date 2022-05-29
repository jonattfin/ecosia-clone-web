import { useState } from "react";
import { Button, Grid } from "@mui/material";
import styled from "@emotion/styled";

import { MainSubtitleDiv, MainTitleDiv } from "../../../shared-components";

export default function Component() {
  const [play, setPlay] = useState(false);

  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <TeamContainerDiv>
            {!play && (
              <>
                <MainTitleDiv>Step inside!</MainTitleDiv>
                <MainSubtitleDiv>
                  Meet the humans who make Ecosia and learn what it&apos;s like
                  to work here.
                </MainSubtitleDiv>
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
                <MovieVideo controls autoPlay={true}>
                  <source
                    src="https://d3fme2ivr1xlgj.cloudfront.net/240719_Ecosia_hiringvideo_subbed_titled.mp4"
                    type="video/mp4"
                  />
                </MovieVideo>
              </>
            )}
          </TeamContainerDiv>
        </Grid>
      </Grid>
    </section>
  );
}

// Styled Components

const TeamContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30vh;
`;

const MovieVideo = styled.video`
  max-width: 25vw;
`;
