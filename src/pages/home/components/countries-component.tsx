import { Grid } from "@mui/material";
import styled from "@emotion/styled";

import {
  Image,
  MainTitleDiv,
  MainSubtitleDiv,
  AppColor,
} from "../../../shared-components";
import * as Images from "./images";

export default function Component() {
  const imageProps = { width: 300, height: 0 };
  imageProps.height = imageProps.width * 0.7;

  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <MainTitleDiv data-test="countries-title">
            Where are your trees being planted?
          </MainTitleDiv>
          <MainSubtitleDiv data-test="countries-subtitle">
            We plant in 30+ countries with local organizations
          </MainSubtitleDiv>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Image src={Images.BrazilImage} alt="brazil" {...imageProps} />
          <NameDiv>Brazil</NameDiv>
          <TextDiv>
            Your trees in Brazil protect thousands of endangered plants and
            animals.
          </TextDiv>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Image
            src={Images.BurkinaFasoImage}
            alt="burkina faso"
            {...imageProps}
          />
          <NameDiv>Burkina Faso</NameDiv>
          <TextDiv>
            By planting trees in Burkina Faso, you restore desertified land to
            its former fertility.
          </TextDiv>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Image src={Images.IndonesiaImage} alt="indonesia" {...imageProps} />
          <NameDiv>Indonesia</NameDiv>
          <TextDiv>
            In Indonesia, your searches bring back forests on former palm oil
            plantations while creating alternative sources of income.
          </TextDiv>
        </Grid>
        <Grid item>&nbsp;</Grid>
      </Grid>
    </section>
  );
}

// Styled Components

const NameDiv = styled.div`
  padding: 1%;
  border-left: 5px solid ${AppColor.Teal};
  text-transform: uppercase;
`;

const TextDiv = styled.div`
  padding-top: 2%;
`;
