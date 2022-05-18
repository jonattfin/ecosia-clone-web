import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Image from "next/image";

import * as Images from './images';

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;

  background-color: aliceblue;
`;

const DivChildContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`;

const AboveTitle = styled.div`
  font-size: 1.5em;
  color: teal;
  text-transform: uppercase;
  padding: 10px 0px;
`;

const Subtitle = styled.div`
  font-size: 2em;
  text-align: center;
`;

const DivContent = styled.div`
  text-align: center;
  padding: 3% 15%;
`;

const DivTitle = styled.div`
  text-transform: capitalize;
  font-size: larger;
  padding-bottom: 10px;
`;

export default function Component() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <DivContainer>
          <AboveTitle>
            We protect your privacy
          </AboveTitle>
          <Subtitle>
            Forests need protecting and so does your privacy. <br />We make sure to do both.
          </Subtitle>
          <div>
            <a href="#statements"><ArrowDropDownCircleIcon fontSize='large'/></a>
          </div>
        </DivContainer>
      </Grid>
      <Grid item xs={12} xl={12}>
        <DivChildContainer id="statements">
          {getStatements().map(({ title, content, image }, index) => (
            <DivContent key={`statement_${index}`}>
              <div>
                <Image src={image} alt="tldr" />
              </div>
              <div>
                <DivTitle>{title}</DivTitle>
                <div>{content}</div>
              </div>
            </DivContent>
          ))}
        </DivChildContainer>
      </Grid>
    </Grid>
  )
}


function getStatements() {
  return [
    {
      title: 'We don’t store your searches permanently',
      content: 'We don’t create personal profiles of you based on your search history. We actually anonymize all searches within one week.',
      image: Images.PantherImage,
    },
    {
      title: 'We don’t sell your data to advertisers',
      content: 'Many web services collect user data in order to sell it without asking your permission. We don’t sell your data or your searches to advertising companies.',
      image: Images.TreesImage,
    },
    {
      title: 'Your searches are encrypted',
      content: 'We protect your searches from potential eavesdroppers with a securely encrypted connection. This way we make sure that nobody between you and us can see your searches.',
      image: Images.CrowImage,
    },
    {
      title: 'We don’t use external tracking tools',
      content: 'Most websites use external tracking tools, like Google Analytics, to optimize their services. We don’t use such third party trackers, in order to prevent others from accessing your searches.',
      image: Images.FishImage
    },
    {
      title: 'You can turn off all our tracking',
      content: 'We only collect a small amount of data to be able to improve our services. If you want to opt out of tracking, you can activate “Do Not Track” in your browser’s settings.',
      image: Images.FoxImage
    },
  ];
}

