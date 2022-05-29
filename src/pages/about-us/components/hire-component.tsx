import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";

import { MainSubtitleDiv, MainTitleDiv } from "../../../shared-components";

export default function Component() {
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <ContainerDiv>
            <MainTitleDiv>We&apos;re hiring!</MainTitleDiv>
            <MainSubtitleDiv>
              Want to help change the world? Let&apos;s team up. <br />
              Apply to help us build great products and services that can make
              the world a more sustainable place. <br />
              We can&apos;t wait to hear from you.
            </MainSubtitleDiv>
            <div>
              <Button variant="contained">See openings</Button>
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30vh;
`;
