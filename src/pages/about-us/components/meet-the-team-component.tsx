import { useState } from "react";
import { Button, Grid } from "@mui/material";
import styled from "@emotion/styled";

import {
  getTranslations,
  MainSubtitleDiv,
  MainTitleDiv,
} from "../../../shared-components";
import { ITranslation, Language } from "../../../providers/context";

export default function Component({ language }: { language?: Language }) {
  const [play, setPlay] = useState(false);
  const t = useTranslations(language);

  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <TeamContainerDiv>
            {!play && (
              <>
                <MainTitleDiv>{t("stepInside")}</MainTitleDiv>
                <MainSubtitleDiv>{t("meetTheHumans")}</MainSubtitleDiv>
                <div>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => setPlay(true)}
                  >
                    Play
                  </Button>
                </div>
              </>
            )}
            {play && (
              <>
                <MovieVideo controls autoPlay={true}>
                  <source
                    src="https://d3fme2ivr1xlgj.cloudfront.net/240719_Ecosia_hiringvideo_subbed_titled.mp4"
                    type="video/mp4"
                  />
                </MovieVideo>
              </>
            )}
          </TeamContainerDiv>
        </Grid>
      </Grid>
    </section>
  );
}

// Styled Components

const TeamContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30vh;
`;

const MovieVideo = styled.video`
  max-width: 25vw;
`;

// translations

const useTranslations = (language?: Language) => {
  const translation: ITranslation = {
    [Language.English]: {
      stepInside: "Step inside!",
      meetTheHumans:
        "Meet the humans who make Ecosia and learn what it's like to work here.",
    },
    [Language.French]: {
      stepInside: "Entrez à l'intérieur!",
      meetTheHumans:
        "Rencontrez les humains qui fabriquent Ecosia et découvrez ce que c'est que de travailler ici.",
    },
  };

  return getTranslations(translation)(language);
};
