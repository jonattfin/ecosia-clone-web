import { Grid } from "@mui/material";
import styled from "@emotion/styled";

import * as Components from "./components";

const AliceBlueGrid = styled(Grid)`
  background-color: aliceblue;
`;

const GreyGrid = styled(Grid)`
  background-color: #f9f9f9;
`;

export default function Component() {
  return (
    <Grid container>
      {/* section */}
      <AliceBlueGrid item xs={12} xl={12}>
        <Components.BannerComponent />
      </AliceBlueGrid>
      {/* section */}

      {/* section */}
      <GreyGrid item xl={4}>
        &nbsp;
      </GreyGrid>
      <GreyGrid item xs={12} xl={4}>
        <Components.SocialBusinessComponent />
      </GreyGrid>
      <GreyGrid item xl={4}>
        &nbsp;
      </GreyGrid>
      {/* section */}

      {/* section */}
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      <Grid item xs={12} xl={4}>
        <Components.MeetTheTeamComponent />
      </Grid>
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      {/* section */}

      {/* section */}
      <GreyGrid item xl={4}>
        &nbsp;
      </GreyGrid>
      <GreyGrid item xs={12} xl={4}>
        <Components.HireComponent />
      </GreyGrid>
      <GreyGrid item xl={4}>
        &nbsp;
      </GreyGrid>
      {/* section */}

      {/* section */}
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      <Grid item xs={12} xl={4}>
        <Components.ContactUsComponent />
      </Grid>
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      {/* section */}
    </Grid>
  );
}
