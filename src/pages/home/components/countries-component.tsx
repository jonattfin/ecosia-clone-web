import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Image from 'next/image';

import * as Images from "./images";
import { AboveTitle, Subtitle } from "./styled-components";

const CountryNameDiv = styled.div`
  padding: 1%;
  border-left: 5px solid teal;
  text-transform: uppercase;
`;

const CountryTextDiv = styled.div`
  padding-top: 2%;
`;

export default function Component() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <AboveTitle data-test="countries-title">
          Where are your trees being planted?
        </AboveTitle>
        <Subtitle data-test="countries-subtitle">
          We plant in 30+ countries with local organizations
        </Subtitle>
      </Grid>
      <Grid item xs={12} xl={4}>
        <Image src={Images.BrazilImage} alt="brazil" />
        <CountryNameDiv>Brazil</CountryNameDiv>
        <CountryTextDiv>Your trees in Brazil protect thousands of endangered plants and animals.</CountryTextDiv>
      </Grid>
      <Grid item xs={12} xl={4}>
        <Image src={Images.BurkinaFasoImage} alt="burkina faso" />
        <CountryNameDiv>Burkina Faso</CountryNameDiv>
        <CountryTextDiv>By planting trees in Burkina Faso, you restore desertified land to its former fertility.</CountryTextDiv>
      </Grid>
      <Grid item xs={12} xl={4}>
        <Image src={Images.IndonesiaImage} alt="indonesia" />
        <CountryNameDiv>Indonesia</CountryNameDiv>
        <CountryTextDiv>In Indonesia, your searches bring back forests on former palm oil plantations while creating alternative sources of income.</CountryTextDiv>
      </Grid>
      <Grid item>&nbsp;</Grid>
    </Grid>
  );
}
