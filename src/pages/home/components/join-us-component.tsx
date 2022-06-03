import { Button } from "@mui/material";
import styled from "@emotion/styled";

import {
  AppColor,
  getTranslations,
  MainSubtitleDiv,
} from "../../../shared-components";
import { ITranslation, Language } from "../../../providers/context";

export default function Component({ language }: { language?: Language }) {
  const t = useTranslations(language);

  return (
    <MainSection>
      <MainSubtitleDiv data-test="join-us-title">{t("joinUs")}</MainSubtitleDiv>
      <div>&nbsp;</div>
      <div>
        <Button color="primary" variant="contained" data-test="share-ecosia">
          {t("shareUs")}
        </Button>
      </div>
    </MainSection>
  );
}

// Styled Components

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  background-color: ${AppColor.AliceBlue};
`;

// translations

const useTranslations = (language?: Language) => {
  const translation: ITranslation = {
    [Language.English]: {
      joinUs: "Join 15 million people who already use Ecosia",
      shareUs: "Share Ecosia",
    },
    [Language.French]: {
      joinUs: "Rejoignez 15 millions de personnes qui utilisent déjà Ecosia",
      shareUs: "Partager Ecosia",
    },
  };

  return getTranslations(translation)(language);
};
