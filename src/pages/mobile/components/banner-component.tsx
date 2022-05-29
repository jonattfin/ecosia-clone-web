import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Image from "next/image";

import {
  AppColor,
  MainSubtitleDiv,
  MainTitleDiv,
} from "../../../shared-components";

import * as Images from "./images";

export default function Component() {
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <ContainerDiv>
            <MainTitleDiv>Ecosia for Mobile</MainTitleDiv>
            <MainSubtitleDiv>
              Plant trees while searching the web <br /> with your mobile phone
              or tablet.
            </MainSubtitleDiv>
            <div>
              <Image src={Images.AppStoreImage} alt={"app store"} />
              <Image src={Images.PlayStoreImage} alt={"play store"} />
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

  background-color: ${AppColor.AliceBlue};
`;
