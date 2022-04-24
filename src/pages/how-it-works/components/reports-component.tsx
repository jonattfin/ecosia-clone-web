import { Button, Grid } from "@mui/material";
import styled from "@emotion/styled";

import { AboveTitle } from "./styled-components";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;
`;

const DivContent = styled.div`
  font-size: x-large;
`;

export default function Component({}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <DivContainer>
          <div>
            <img
              src="https://infopages-prod-cdn.ecosia.org/assets/images/what/transperancy-blue-img-8408403664.svg"
              alt="transparency"
            />
          </div>
          <AboveTitle>We know trust has to be earned</AboveTitle>
          <DivContent>
            That is why we publish our monthly financial reports and tree
            planting receipts. <br /> This way you can hold us accountable as we
            follow our journey to a reforested world.
          </DivContent>
          <div>
            <Button variant="contained">View Reports</Button>
          </div>
        </DivContainer>
      </Grid>
    </Grid>
  );
}
