import { Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import styled from "@emotion/styled";

import { Language } from "../../../providers/context";

import {
  AppColor,
  Image,
  MainTitleDiv,
  MainSubtitleDiv,
  LinkDiv,
} from "../../../shared-components";
import * as Images from "./images";
import { ITranslationFunc, withTranslations } from "../../../helpers";

const Component = ({ t }: { t: ITranslationFunc }) => {
  const imageProps = { width: 150, height: 0 };
  imageProps.height = imageProps.width * 0.6;

  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <MainTitleDiv>{t("why")}</MainTitleDiv>
          <MainSubtitleDiv>{t("wePutPeople")}</MainSubtitleDiv>
        </Grid>
        <Grid item md={12} xl={2}>
          <Image src={Images.ProfitsImage} alt="profits" {...imageProps} />
        </Grid>
        <Grid item md={12} xl={4}>
          <ContainerDiv>
            <TitleDiv>{t("notForProfit")}</TitleDiv>
            <div>{t("weDedicate")}</div>
          </ContainerDiv>
        </Grid>
        <Grid item md={12} xl={2}>
          <Image src={Images.PrivacyImage} alt="privacy" {...imageProps} />
        </Grid>
        <Grid item md={12} xl={4}>
          <ContainerDiv>
            <TitleDiv>{t("isPoweredByRenewable")}</TitleDiv>
            <div>{t("ourSolarPanels")}</div>
          </ContainerDiv>
        </Grid>
        <Grid item md={12} xl={2}>
          <Image src={Images.WorldImage} alt="world" {...imageProps} />
        </Grid>
        <Grid item md={12} xl={4}>
          <ContainerDiv>
            <TitleDiv>{t("privacyFirst")}</TitleDiv>
            <div>{t("weAnonymize")}</div>
          </ContainerDiv>
        </Grid>
        <Grid item md={12} xl={2}>
          <Image src={Images.CoinImage} alt="coin" {...imageProps} />
        </Grid>
        <Grid item md={12} xl={4}>
          <ContainerDiv>
            <TitleDiv>{t("weAreTransparent")}</TitleDiv>
            <div>{t("wePublishReports")}</div>
          </ContainerDiv>
        </Grid>
        <Grid item xs={12} xl={12}>
          <LinkDiv>
            <Link href="#">
              <a>
                {t("otherReasons")} <ChevronRightIcon fontSize="small" />
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
};

// Styled Components

const ContainerDiv = styled.div`
  font-size: larger;
  padding-left: 20px;
`;

const TitleDiv = styled.div`
  color: ${AppColor.Teal};
  padding-bottom: 10px;
`;

// translations

const translations = {
  [Language.English]: {
    why: "Why choose Ecosia?",
    wePutPeople: "We put people and planet before profit",
    notForProfit: "We???re a not-for-profit business",
    weDedicate:
      "We dedicate 100% of our profits to climate action, with at least 80% financing tree-planting projects.",
    isPoweredByRenewable: "Ecosia is powered by 200% renewable energy",
    ourSolarPanels:
      "Our solar panels produce twice the amount of energy needed to power all searches with renewables.",
    privacyFirst: "We always put your privacy first",
    weAnonymize:
      "We anonymize your searches and don???t create a profile of you. We???re interested in trees, not your data.",
    weAreTransparent: "We are transparent about everything we do",
    wePublishReports:
      "We publish detailed financial reports and frequent updates from our tree planting projects.",
    otherReasons: "Other reasons",
  },
  [Language.French]: {
    why: "Pourquoi choisir Ecosia?",
    wePutPeople: "Nous pla??ons les gens et la plan??te avant le profit",
    notForProfit: "Nous sommes une entreprise ?? but non lucratif",
    weDedicate:
      "Nous consacrons 100% de nos b??n??fices ?? l'action climatique, avec au moins 80% de financement de projets de plantation d'arbres.",
    isPoweredByRenewable:
      "Ecosia est aliment?? ?? 200% par de l'??nergie renouvelable",
    ourSolarPanels:
      "Nos panneaux solaires produisent deux fois plus d'??nergie que n??cessaire pour alimenter toutes les recherches avec des ??nergies renouvelables.",
    privacyFirst: "Nous accordons toujours la priorit?? ?? votre vie priv??e",
    weAnonymize:
      "Nous anonymisons vos recherches et ne cr??ons pas de profil de vous. Nous nous int??ressons aux arbres, pas ?? vos donn??es.",
    weAreTransparent: "Nous sommes transparents sur tout ce que nous faisons",
    wePublishReports:
      "Nous publions des rapports financiers d??taill??s et des mises ?? jour fr??quentes de nos projets de plantation d'arbres.",
    otherReasons: "Autres raisons",
  },
};

export default withTranslations(translations)(Component);
