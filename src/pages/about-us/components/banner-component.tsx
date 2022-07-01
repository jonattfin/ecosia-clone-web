import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import { ITranslationFunc, withTranslations } from "../../../helpers";
import { Language } from "../../../providers/context";

import { MainTitleDiv } from "../../../shared-components";

const Component = ({ t }: { t: ITranslationFunc }) => {
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
              <Button variant="contained" data-test="add-forrest-button">
                {t("addforrestToFirefox")}
              </Button>
            </div>
          </ContainerDiv>
        </Grid>
      </Grid>
    </section>
  );
};

// Styled Components

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

// translations

const translations = {
  [Language.English]: {
    weBelive: "We believe in everyone's power to do good",
    addforrestToFirefox: "Add forrest to Firefox",
  },
  [Language.French]: {
    weBelive: "Nous croyons au pouvoir de chacun de faire le bien",
    addforrestToFirefox: "Ajouter forrest à Firefox",
  },
};

export default withTranslations(translations)(Component);
