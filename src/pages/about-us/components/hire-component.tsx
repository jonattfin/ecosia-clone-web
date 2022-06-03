import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import { getTranslations } from "../../../helpers";
import { ITranslation, Language } from "../../../providers/context";

import {
  MainSubtitleDiv,
  MainTitleDiv,
} from "../../../shared-components";

export default function Component({ language }: { language?: Language }) {
  const t = useTranslations(language);
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <ContainerDiv>
            <MainTitleDiv>{t("weHire")}</MainTitleDiv>
            <MainSubtitleDiv>
              {t("changeTheWorld")}
              <br />
              {t("buildGreatProducts")} <br />
              {t("hearYou")}.
            </MainSubtitleDiv>
            <div>
              <Button variant="contained">{t("seeOpenings")}</Button>
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
  justify-content: space-around;
  align-items: center;
  height: 30vh;
`;

// translations

const useTranslations = (language?: Language) => {
  const translation: ITranslation = {
    [Language.English]: {
      weHire: "We're hiring!",
      changeTheWorld: "Want to help change the world? Let's team up.",
      buildGreatProducts:
        "Apply to help us build great products and services that can make the world a more sustainable place.",
      hearYou: "We can't wait to hear from you",
      seeOpenings: "See openings",
    },
    [Language.French]: {
      weHire: "Nous embauchons!",
      changeTheWorld: "Vous voulez aider à changer le monde? Faisons équipe.",
      buildGreatProducts:
        "Postulez pour nous aider à construire d'excellents produits et services qui peuvent faire du monde un endroit plus durable.",
      hearYou: "Nous avons hâte d'avoir de vos nouvelles",
      seeOpenings: "Voir les ouvertures",
    },
  };

  return getTranslations(translation)(language);
};
