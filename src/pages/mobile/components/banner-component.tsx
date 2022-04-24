import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";

import * as Images from "./images";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;

  background-color: aliceblue;
`;

const AboveTitle = styled.div`
  font-size: 1.5em;
  color: teal;
  text-transform: uppercase;
  padding: 10px 0px;
`;

const Subtitle = styled.div`
  font-size: 2em;
  text-align: center;
`;

export default function Component({}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <DivContainer>
          <AboveTitle>Ecosia for Mobile</AboveTitle>
          <Subtitle>
            Plant trees while searching the web <br /> with your mobile phone or
            tablet.
          </Subtitle>
          <div>
            <Image src={Images.AppStoreImage} alt={"app store"} />
            <Image src={Images.PlayStoreImage} alt={"play store"} />
          </div>
        </DivContainer>
      </Grid>
    </Grid>
  );
}
