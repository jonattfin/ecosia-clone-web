import { Button, Grid } from "@mui/material";
import styled from "@emotion/styled";

import { AboveTitle } from "./styled-components";

const Separator = styled.div`
  padding: 1vh;
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export default function Component({}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <DivContainer>
          <AboveTitle>Plant trees while you search the web</AboveTitle>
          <Separator />
          <div>
            We use the profit we make from your searches to plant trees where
            they are needed most.{" "}
          </div>
          <div>
            Get the free browser extension and plant trees with every search.
          </div>
          <Separator />
          <div>
            <Button variant="contained">Add Ecosia to Firefox</Button>
          </div>
        </DivContainer>
      </Grid>
    </Grid>
  );
}
