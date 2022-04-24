
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { FacebookRounded, PublicRounded, EmojiPeopleRounded, PianoRounded } from '@mui/icons-material';

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DivLine = styled.div`
  border-top: 2px dotted grey;
  text-align: center;
  padding: 10px 50px;
`;

const DivExplanation = styled.div`
  text-align: center;
  font-size: small;
  padding: 10px 0;
`;

export default function Component() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <DivLine />
        <DivContainer>
          <FacebookRounded/>  
          <PublicRounded />
          <EmojiPeopleRounded />
          <PianoRounded />
        </DivContainer>
      </Grid>
      <Grid item xs={12} xl={12}>
        <DivExplanation>
          Ecosia GmbH does not assume responsibility for the content of sites to which it links and the way in which search results are displayed. To learn more please read our privacy policy and our terms of service.
        </DivExplanation>
      </Grid>
    </Grid>
  )
}
