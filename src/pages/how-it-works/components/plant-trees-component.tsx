import { Button, Grid } from "@mui/material";
import styled from "@emotion/styled";

import { MainTitleDiv } from "../../../shared-components";

export default function Component() {
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <ContainerDiv>
            <MainTitleDiv>Plant trees while you search the web</MainTitleDiv>
            <SeparatorDiv />
            <div>
              We use the profit we make from your searches to plant trees where
              they are needed most.{" "}
            </div>
            <div>
              Get the free browser extension and plant trees with every search.
            </div>
            <SeparatorDiv />
            <div>
              <Button variant="contained">Add Ecosia to Firefox</Button>
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
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const SeparatorDiv = styled.div`
  padding: 1vh;
`;
