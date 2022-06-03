import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import { ITranslation, Language } from "../../../providers/context";

import { getTranslations, MainTitleDiv } from "../../../shared-components";

export default function Component({ language }: { language?: Language }) {
  const t = useTranslations(language);
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <ContainerDiv>
            <MainTitleDiv data-test="banner-title">
              {t("weBelive")}
            </MainTitleDiv>
            <div>&nbsp;</div>
            <div>
              <Button variant="contained" data-test="add-ecosia-button">
                {t("addEcosiaToFirefox")}
              </Button>
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
  height: 40vh;
`;

// translations

const useTranslations = (language?: Language) => {
  const translation: ITranslation = {
    [Language.English]: {
      weBelive: "We believe in everyone's power to do good",
      addEcosiaToFirefox: "Add Ecosia to Firefox",
    },
    [Language.French]: {
      weBelive: "Nous croyons au pouvoir de chacun de faire le bien",
      addEcosiaToFirefox: "Ajouter Ecosia à Firefox",
    },
  };

  return getTranslations(translation)(language);
};
