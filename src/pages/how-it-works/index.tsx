import { Grid } from "@mui/material";
import styled from "@emotion/styled";

import * as Components from "./components";
import { AppColor } from "../../shared-components";

export default function Component() {
  return (
    <section>
      <Grid container>
        <BlueGrid item xl={3}>
          &nbsp;
        </BlueGrid>
        <BlueGrid item xs={12} xl={6}>
          <Components.PlantTreesComponent />
        </BlueGrid>
        <BlueGrid item xl={3}>
          &nbsp;
        </BlueGrid>

        {/* Brands section */}
        <Grid item xs={12} xl={12}>
          <Components.BrandsComponent />
        </Grid>
        {/* Brands section */}

        {/* How it works section */}
        <Grid item xl={3}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={6}>
          <Components.HowItWorksComponent />
        </Grid>
        <Grid item xl={3}>
          &nbsp;
        </Grid>
        {/* How it works section */}

        {/* Graphics section */}
        <BlueGrid item xl={3}>
          &nbsp;
        </BlueGrid>
        <BlueGrid item xs={12} xl={6}>
          <Components.GraphicsComponent />
        </BlueGrid>
        <BlueGrid item xl={3}>
          &nbsp;
        </BlueGrid>
        {/* Graphics section */}

        {/* Reports section */}
        <Grid item xl={3}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={6}>
          <Components.ReportsComponent />
        </Grid>
        <Grid item xl={3}>
          &nbsp;
        </Grid>
        {/* Reports section */}
      </Grid>
    </section>
  );
}

// Styled Components

const BlueGrid = styled(Grid)`
  background-color: ${AppColor.AliceBlue};
`;
