import styled from "@emotion/styled";
import { TextField, Button, MenuItem, Grid } from "@mui/material";

import { MainSubtitleDiv, MainTitleDiv } from "../../../shared-components";

export default function Component() {
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <ParentContainer>
            <MainTitleDiv>Contact us</MainTitleDiv>
            <MainSubtitleDiv>
              For questions about Ecosia check our FAQ first. <br />
              If you don&apos;t see what you are looking for, drop us a line!
            </MainSubtitleDiv>
            <ChildContainer>
              <ExtraTextField
                variant="outlined"
                label="Message"
                multiline
                rows={5}
              ></ExtraTextField>
              <ExtraTextField variant="outlined" label="E-mail" />
              <ExtraTextField variant="outlined" label="Subject" select>
                {getFilterOptions().map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </ExtraTextField>
              <Button variant="contained">Send</Button>
            </ChildContainer>
          </ParentContainer>
        </Grid>
      </Grid>
    </section>
  );
}

function getFilterOptions(): string[] {
  return ["Subject", "Technical problem", "General inquiry", "Press inquiry"];
}

// Styled Components

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;

  @media (max-height: 1080px) {
    height: 50vh;
  }
`;

const ExtraTextField = styled(TextField)`
  width: 25vw;
  margin: 5px;
`;
