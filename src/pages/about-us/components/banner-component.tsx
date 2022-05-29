import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";

import { MainTitleDiv } from "../../../shared-components";

export default function Component() {
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <ContainerDiv>
            <MainTitleDiv data-test="banner-title">
              We believe in everyone&apos;s power to do good
            </MainTitleDiv>
            <div>&nbsp;</div>
            <div>
              <Button variant="contained" data-test="add-ecosia-button">
                Add Ecosia to Firefox
              </Button>
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
  justify-content: center;
  align-items: center;
  height: 40vh;
`;
