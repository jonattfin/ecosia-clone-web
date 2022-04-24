import { Button, Grid } from "@mui/material";
import styled from "@emotion/styled";

import { AboveTitle } from "./styled-components";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

export default function Component() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <DivContainer>
          <AboveTitle data-test="banner-title">
            We believe in everyone's power to do good
          </AboveTitle>
          <div>&nbsp;</div>
          <div>
            <Button variant="contained" data-test="add-ecosia-button">
              Add Ecosia to Firefox
            </Button>
          </div>
        </DivContainer>
      </Grid>
    </Grid>
  );
}
