import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";

import * as Images from "./images";

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
  background-color: #ededed;
`;

export default function Component() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <DivContainer>
          {getBrands().map((brand, index) => (
            <Image
              src={brand}
              key={`brand_image_${index}`}
              alt="tdlr"
              height={"50px"}
            ></Image>
          ))}
        </DivContainer>
      </Grid>
    </Grid>
  );
}

function getBrands() {
  const {
    UpWorthyImage,
    ScientificImage,
    GuardianImage,
    SalonImage,
    ForbesImage,
  } = Images;
  return [
    UpWorthyImage,
    ScientificImage,
    GuardianImage,
    SalonImage,
    ForbesImage,
  ];
}
