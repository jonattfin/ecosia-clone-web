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

const ExtraSubtitle = styled(Subtitle)`
  text-align: center;
`;

export default function Component() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <DivContainer>
          <AboveTitle>We're hiring!</AboveTitle>
          <ExtraSubtitle>
            Want to help change the world? Let's team up. <br />
            Apply to help us build great products and services that can make the
            world a more sustainable place. <br />
            We can't wait to hear from you.
          </ExtraSubtitle>
          <div>
            <Button variant="contained">See openings</Button>
          </div>
        </DivContainer>
      </Grid>
    </Grid>
  );
}
