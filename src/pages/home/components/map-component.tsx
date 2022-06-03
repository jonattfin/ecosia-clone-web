import { Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import styled from "@emotion/styled";
import {
  AppColor,
  LinkDiv,
  MainTitleDiv,
  MainSubtitleKickDiv,
  getTranslations,
} from "../../../shared-components";
import { ITranslation, Language } from "../../../providers/context";

export interface MapComponentProps {
  counter: number;
  language?: Language;
}

export default function Component({ counter, language }: MapComponentProps) {
  const t = useTranslations(language);

  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <MainTitleDiv data-test="map-title">{t("treesPlanted")}</MainTitleDiv>
          <MainSubtitleKickDiv>{counter}</MainSubtitleKickDiv>
        </Grid>
        <Grid item xs={12} xl={3}>
          <TitleDiv>15 Million</TitleDiv>
          <ContentDiv>{t("peopleUsingEcosia")}</ContentDiv>
        </Grid>
        <Grid item xs={12} xl={3}>
          <TitleDiv>500+</TitleDiv>
          <ContentDiv>{t("nativeSpecies")}</ContentDiv>
        </Grid>
        <Grid item xs={12} xl={3}>
          <TitleDiv>30+</TitleDiv>
          <ContentDiv>{t("countries")}</ContentDiv>
        </Grid>
        <Grid item xs={12} xl={3}>
          <TitleDiv>60+</TitleDiv>
          <ContentDiv>{t("activeProjects")}</ContentDiv>
        </Grid>
        <Grid item xs={12} xl={12}>
          <LinkDiv>
            <Link href="/blog">
              <a data-test="discover-projects">
                {t("discover")} <ChevronRightIcon fontSize="small" />
              </a>
            </Link>
          </LinkDiv>
        </Grid>
        <Grid item xs={12} xl={12}>
          &nbsp;
        </Grid>
      </Grid>
    </section>
  );
}

// Styled Components

const TitleDiv = styled.div`
  font-size: x-large;
  padding-left: 20px;
  border-left: 5px solid ${AppColor.Teal};
`;

const ContentDiv = styled.div`
  padding-left: 20px;
  border-left: 5px solid ${AppColor.Teal};
`;

// translations

const useTranslations = (language?: Language) => {
  const translation: ITranslation = {
    [Language.English]: {
      treesPlanted: "Trees planted by ecosia users",
      peopleUsingEcosia: "People using Ecosia",
      nativeSpecies: "Native species",
      countries: "Countries",
      activeProjects: "Active projects",
      discover: "Discover our projects",
    },
    [Language.French]: {
      treesPlanted: "Arbres plantés par les utilisateurs d'ecosia",
      peopleUsingEcosia: "Personnes utilisant Ecosia",
      nativeSpecies: "Espèces indigènes",
      countries: "Pays",
      activeProjects: "Projets actifs",
      discover: "Découvrez nos projets",
    },
  };

  return getTranslations(translation)(language);
};
