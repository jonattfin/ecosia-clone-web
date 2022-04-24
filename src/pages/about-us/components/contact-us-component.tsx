import { TextField, Button, MenuItem, Grid } from "@mui/material";
import styled from "@emotion/styled";

import { AboveTitle, Subtitle } from "./styled-components";

const DivParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DivChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;

  @media (max-height: 1080px) {
    height: 50vh;
  }
`;

const TextFieldExtra = styled(TextField)`
  width: 25vw;
  margin: 5px;
`;

export default function Component({}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <DivParentContainer>
          <AboveTitle>Contact us</AboveTitle>
          <Subtitle>
            For questions about Ecosia check our FAQ first. <br />
            If you don't see what you are looking for, drop us a line!
          </Subtitle>
          <DivChildContainer>
            <TextFieldExtra
              variant="outlined"
              label="Message"
              multiline
              rows={5}
            ></TextFieldExtra>
            <TextFieldExtra variant="outlined" label="E-mail" />
            <TextFieldExtra variant="outlined" label="Subject" select>
              {getFilterOptions().map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextFieldExtra>
            <Button variant="contained">Send</Button>
          </DivChildContainer>
        </DivParentContainer>
      </Grid>
    </Grid>
  );
}

function getFilterOptions() {
  return ["Subject", "Technical problem", "General inquiry", "Press inquiry"];
}
