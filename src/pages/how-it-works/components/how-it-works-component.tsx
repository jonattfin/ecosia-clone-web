import { Grid } from "@mui/material";
import styled from "@emotion/styled";

import { Image, MainTitleDiv } from "../../../shared-components";
import * as Images from "./images";

export default function Component() {
  const imageProps = { width: 200, height: 0 };
  imageProps.height = imageProps.width * 0.5;

  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <ParentContainerDiv>
            <MainTitleDiv>How it works</MainTitleDiv>
            <ChildContainerDiv>
              <ImageContainerDiv>
                <LogoImage
                  src={Images.AdsImage}
                  alt="tdlr"
                  {...imageProps}
                ></LogoImage>
                <ContentDiv>Search ads generate income for Ecosia.</ContentDiv>
              </ImageContainerDiv>
              <ImageContainerDiv>
                <LogoImage
                  src={Images.EcosiaImage}
                  alt="tdlr"
                  {...imageProps}
                ></LogoImage>
                <ContentDiv>You search the web with Ecosia.</ContentDiv>
              </ImageContainerDiv>
              <ImageContainerDiv>
                <LogoImage
                  src={Images.IncomeImage}
                  alt="tdlr"
                  {...imageProps}
                ></LogoImage>
                <ContentDiv>Ecosia uses this income to plant trees.</ContentDiv>
              </ImageContainerDiv>
            </ChildContainerDiv>
          </ParentContainerDiv>
        </Grid>
      </Grid>
    </section>
  );
}

// Styled Components

const ParentContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40vh;
`;

const ChildContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ImageContainerDiv = styled.div`
  text-align: center;
`;

const LogoImage = styled(Image)`
  max-width: 150px;
  padding: 20px;
`;

const ContentDiv = styled.div`
  padding: 40px;
`;
