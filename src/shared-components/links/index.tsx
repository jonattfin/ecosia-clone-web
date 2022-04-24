import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import Image from 'next/image';

import images from './images';

const GridWrapper = styled(Grid)`
  padding: 40px;
`

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 15vh;
`;

const ImgWrapper = styled(Image)`
  width: 10vw;
  max-width: 150px;
`;

const DivTitle = styled.div`
  font-size: medium;
  text-transform: uppercase;
  padding-bottom: 20px;
`

const Links = () => {
  return (
    <GridWrapper container spacing={2}>
      <Grid item xs={2} xl={2}>
        <div><ImgWrapper src={images.corporationImage} alt="b corporation"></ImgWrapper></div>
      </Grid>
      <Grid item xs={8} xl={8}>
        <DivContainer>
          <div>
            <DivTitle>SITEMAP</DivTitle>
            <div><a href="#id">News</a></div>
            <div><a href="#id">How Ecosia works</a></div>
            <div><a href="#id">About us</a></div>
            <div><a href="#id">Mobile app</a></div>
            <div><a href="#id">Privacy</a></div>
            <div><a href="#id">Settings</a></div>
          </div>
          <div>
            <DivTitle>Resources</DivTitle>
            <div><a href="#id">FAQ</a></div>
            <div><a href="#id">Advertise on Ecosia</a></div>
            <div><a href="#id">Financial reports</a></div>
            <div><a href="#id">Blog</a></div>
            <div><a href="#id">Shop</a></div>
            <div><a href="#id">Press</a></div>
            <div><a href="#id">Jobs</a></div>
          </div>
          <div>
            <DivTitle>Imprint</DivTitle>
            <div>
              Ecosia GmbH
              Schinkestraße 9
              <br/>
              12047 Berlin, Germany
              <br/>
              Chairman Christian Kroll
            </div>
          </div>
        </DivContainer>
      </Grid>
      <Grid item xs={2} xl={2}>
        <DivTitle>Apps</DivTitle>
        <div><ImgWrapper src={images.appStoreImage} alt="app store"></ImgWrapper></div>
        <div><ImgWrapper src={images.playStoreImage} alt="play store"></ImgWrapper></div>
      </Grid>
    </GridWrapper>
  )
}

export default Links;
