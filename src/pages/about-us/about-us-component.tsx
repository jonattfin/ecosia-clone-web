import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Head from "next/head";

import * as Components from "./components";
import { AppColor } from "../../shared-components";

export default function Component() {
  const title = "About Ecosia and the team";

  return (
    <section>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Grid container>
        {/* section */}
        <BlueGrid item xs={12} xl={12}>
          <Components.BannerComponent />
        </BlueGrid>
        {/* section */}

        {/* section */}
        <GreyGrid item xl={3}>
          &nbsp;
        </GreyGrid>
        <GreyGrid item xs={12} xl={6}>
          <Components.SocialBusinessComponent />
        </GreyGrid>
        <GreyGrid item xl={3}>
          &nbsp;
        </GreyGrid>
        {/* section */}

        {/* section */}
        <Grid item xl={3}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={6}>
          <Components.MeetTheTeamComponent />
        </Grid>
        <Grid item xl={3}>
          &nbsp;
        </Grid>
        {/* section */}

        {/* section */}
        <GreyGrid item xl={3}>
          &nbsp;
        </GreyGrid>
        <GreyGrid item xs={12} xl={6}>
          <Components.HireComponent />
        </GreyGrid>
        <GreyGrid item xl={3}>
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
    </section>
  );
}

// Styled Components

const BlueGrid = styled(Grid)`
  background-color: ${AppColor.AliceBlue};
`;

const GreyGrid = styled(Grid)`
  background-color: ${AppColor.Grey};
`;
