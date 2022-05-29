import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";

import { Image, MainTitleDiv } from "../../../shared-components";
import * as Images from "./images";

export default function Component() {
  const imageProps = { width: 100, height: 0 };
  imageProps.height = imageProps.width * 1;

  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <ContainerDiv>
            <div>
              <Image
                src={Images.ReportsImage}
                alt="transparency"
                {...imageProps}
              />
            </div>
            <MainTitleDiv>We know trust has to be earned</MainTitleDiv>
            <ContentDiv>
              That is why we publish our monthly financial reports and tree
              planting receipts. <br /> This way you can hold us accountable as
              we follow our journey to a reforested world.
            </ContentDiv>
            <div>
              <Button variant="contained">View Reports</Button>
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
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;
`;

const ContentDiv = styled.div`
  font-size: x-large;
`;
