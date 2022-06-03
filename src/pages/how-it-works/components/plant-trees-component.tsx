import { Button, Grid } from "@mui/material";
import styled from "@emotion/styled";

import { MainTitleDiv } from "../../../shared-components";
import { ITranslation, Language } from "../../../providers/context";
import { getTranslations } from "../../../helpers";

export default function Component({ language }: { language?: Language }) {
  const t = useTranslations(language);
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <ContainerDiv>
            <MainTitleDiv>{t("plantTrees")}</MainTitleDiv>
            <SeparatorDiv />
            <div>{t("weUseTheProfit")} </div>
            <div>{t("getTheFreeExtension")}</div>
            <SeparatorDiv />
            <div>
              <Button variant="contained">{t("addEcosiaToBrowser")}</Button>
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
  height: 50vh;
`;

const SeparatorDiv = styled.div`
  padding: 1vh;
`;

// translations

const useTranslations = (language?: Language) => {
  const translation: ITranslation = {
    [Language.English]: {
      plantTrees: "Plant trees while you search the web",
      weUseTheProfit:
        "We use the profit we make from your searches to plant trees where they are needed most.",
      getTheFreeExtension:
        "Get the free browser extension and plant trees with every search.",
      addEcosiaToBrowser: "Add Ecosia to Firefox",
    },
    [Language.French]: {
      plantTrees:
        "Plantez des arbres pendant que vous effectuez une recherche sur le Web",
      weUseTheProfit:
        "Nous utilisons le profit que nous tirons de vos recherches pour planter des arbres là où ils sont le plus nécessaires.",
      getTheFreeExtension:
        "Obtenez l'extension de navigateur gratuite et plantez des arbres à chaque recherche.",
      addEcosiaToBrowser: "Ajouter Ecosia à Firefox",
    },
  };

  return getTranslations(translation)(language);
};
