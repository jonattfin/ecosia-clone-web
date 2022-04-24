import { Grid } from "@mui/material";
import styled from "@emotion/styled";

import * as Components from "./components";

const AliceBlueGrid = styled(Grid)`
  background-color: aliceblue;
`;

export default function Component() {
  return (
    <Grid container>
      <AliceBlueGrid item xl={4}>
        &nbsp;
      </AliceBlueGrid>
      <AliceBlueGrid item xs={12} xl={4}>
        <Components.PlantTreesComponent />
      </AliceBlueGrid>
      <AliceBlueGrid item xl={4}>
        &nbsp;
      </AliceBlueGrid>

      {/* Brands section */}
      <Grid item xs={12} xl={12}>
        <Components.BrandsComponent />
      </Grid>
      {/* Brands section */}

      {/* How it works section */}
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      <Grid item xs={12} xl={4}>
        <Components.HowItWorksComponent />
      </Grid>
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      {/* How it works section */}

      {/* Graphics section */}
      <AliceBlueGrid item xl={4}>
        &nbsp;
      </AliceBlueGrid>
      <AliceBlueGrid item xs={12} xl={4}>
        <Components.GraphicsComponent />
      </AliceBlueGrid>
      <AliceBlueGrid item xl={4}>
        &nbsp;
      </AliceBlueGrid>
      {/* Graphics section */}

      {/* Reports section */}
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      <Grid item xs={12} xl={4}>
        <Components.ReportsComponent />
      </Grid>
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      {/* Reports section */}
    </Grid>
  );
}
