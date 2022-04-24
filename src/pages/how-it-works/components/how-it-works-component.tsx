import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";

import * as Images from "./images";
import { AboveTitle } from "./styled-components";

const SpecialImage = styled(Image)`
  max-width: 150px;
  padding: 20px;
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40vh;
`;

const DivChildContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DivImageContainer = styled.div`
  text-align: center;
`;

const DivContentContainer = styled.div`
  padding: 20px;
`;

export default function Component({}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <DivContainer>
          <AboveTitle>How it works</AboveTitle>
          <DivChildContainer>
            <DivImageContainer>
              <SpecialImage src={Images.AdsImage} alt="tdlr"></SpecialImage>
              <DivContentContainer>
                Search ads generate income for Ecosia.
              </DivContentContainer>
            </DivImageContainer>
            <DivImageContainer>
              <SpecialImage src={Images.EcosiaImage} alt="tdlr"></SpecialImage>
              <DivContentContainer>
                You search the web with Ecosia.
              </DivContentContainer>
            </DivImageContainer>
            <DivImageContainer>
              <SpecialImage src={Images.IncomeImage} alt="tdlr"></SpecialImage>
              <DivContentContainer>
                Ecosia uses this income to plant trees.
              </DivContentContainer>
            </DivImageContainer>
          </DivChildContainer>
        </DivContainer>
      </Grid>
    </Grid>
  );
}
