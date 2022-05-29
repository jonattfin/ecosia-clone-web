import { Button } from "@mui/material";
import styled from "@emotion/styled";

import { AppColor, MainSubtitleDiv } from "../../../shared-components";

export default function Component() {
  return (
    <MainSection>
      <MainSubtitleDiv data-test="join-us-title">
        Join 15 million people who already use Ecosia
      </MainSubtitleDiv>
      <div>&nbsp;</div>
      <div>
        <Button color="primary" variant="contained" data-test="share-ecosia">
          Share Ecosia
        </Button>
      </div>
    </MainSection>
  );
}

// Styled Components

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  background-color: ${AppColor.AliceBlue};
`;
