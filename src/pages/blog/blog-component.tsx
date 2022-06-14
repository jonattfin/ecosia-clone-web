import { Grid } from "@mui/material";
import React, { Fragment, SyntheticEvent, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Link from "next/link";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

import { AppColor, Image, Project } from "../../shared-components";
import * as Images from "./components/images";
import { Language } from "../../providers/context";
import { ITranslationFunc, withTranslations } from "../../helpers";
import dynamic from "next/dynamic";

const PieComponent = dynamic(() => import("../../shared-components/pie"), {
  ssr: false,
});

export interface BlogProps {
  projects: Project[];
  reports: ReportData[];
  language: string;
}

interface BlogPropsWithTranslation extends BlogProps {
  t: ITranslationFunc;
}

const Component = ({ projects, t, reports }: BlogPropsWithTranslation) => {
  const [value, setValue] = useState(0);
  const [shownId, setShownId] = useState(0);
  const [month, setMonth] = React.useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleMonthChange = (event: SelectChangeEvent) => {
    setMonth(parseInt(event.target.value));
  };

  const getReport = () => {
    return reports[month];
  };

  const imageProps = { width: 150, height: 0, alt: "something special" };
  imageProps.height = imageProps.width * 0.5;

  return (
    <MainContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={3}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={6}>
          <LogoHeaderDiv>
            <LogoImageDiv>
              <Image src={Images.LogoImage} {...imageProps} />
            </LogoImageDiv>
            <TitleHeader>Blog</TitleHeader>
          </LogoHeaderDiv>

          <ProjectsHeaderDiv>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab value={0} label="Trees" />
              <Tab value={1} label="Money" />
            </Tabs>
          </ProjectsHeaderDiv>
          <SeparatorDiv />
          {renderProjects({ value, projects, setShownId, shownId, t })}
          {renderMoney({
            value,
            t,
            handleMonthChange,
            getReport,
            month,
            months: reports.map((r) => r.month),
          })}
        </Grid>
        <Grid item xs={12} xl={3}>
          &nbsp;
        </Grid>
      </Grid>
    </MainContainer>
  );
};

function renderProjects({
  value,
  projects,
  setShownId,
  shownId,
  t,
}: {
  projects: Project[];
  value: number;
  setShownId: (id: number) => void;
  shownId: number;
  t: ITranslationFunc;
}): React.ReactNode {
  return (
    <TabPanel index={0} value={value}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <ProjectsDescriptionDiv>{t("treePlanting")}</ProjectsDescriptionDiv>
        </Grid>
        {projects.map((project) => (
          <Grid
            item
            xs={12}
            lg={6}
            xl={4}
            key={project.id}
            onMouseEnter={() => setShownId(project.id)}
            onMouseLeave={() => setShownId(0)}
          >
            <div>
              <ProjectImg src={project.imageUrl}></ProjectImg>
              <TitleContainerDiv>
                <TitleParagraph>{project.scope}</TitleParagraph>
                {shownId === project.id && showMediaLinks(project)}
              </TitleContainerDiv>
              <SubtitleParagraph>{project.name}</SubtitleParagraph>
              <p>{project.desc}</p>
              <Link href={`/project/${project.id}`}>
                <a>
                  <Button
                    size="small"
                    color="secondary"
                    endIcon={<NavigateNextIcon />}
                  >
                    View
                  </Button>
                </a>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </TabPanel>
  );
}

interface KeyValuePair {
  key: string;
  value: number;
}

interface ReportData {
  month: string;
  totalIncome: number;
  financedTrees: number;
  items: KeyValuePair[];
  countries: KeyValuePair[];
}

function renderMoney({
  value,
  t,
  handleMonthChange,
  getReport,
  month,
  months,
}: {
  value: number;
  t: ITranslationFunc;
  month: number;
  months: string[];
  handleMonthChange: any;
  getReport: () => ReportData;
}): React.ReactNode {
  const currentReport = getReport();

  const getPieData = () => {
    return currentReport.items.map(({ key, value }) => {
      return {
        id: key,
        label: key,
        value,
      };
    });
  };

  return (
    <TabPanel index={1} value={value}>
      <Grid container spacing={2}>
        <Grid item xs={4} xl={4}>
          <InputLabel id="month-select-label">Month</InputLabel>
          <Select
            labelId="month-select-label"
            id="month-select"
            value={month}
            label="Month"
            onChange={handleMonthChange}
          >
            {months.map((month, index) => {
              return (
                <MenuItem key={`month_${month}`} value={index}>
                  {month}
                </MenuItem>
              );
            })}
          </Select>
          <CenteredContainerDiv>
            <TitleHeader>{t("title")}</TitleHeader>
            <SubtitleParagraph>{t("aboutTransparency")}</SubtitleParagraph>
          </CenteredContainerDiv>
        </Grid>
        <Grid item xs={4} xl={4}>
          <Card variant="outlined">
            <CardContent>
              <CardParagraph>{currentReport.totalIncome}</CardParagraph>
            </CardContent>
            <CardParagraph>{t("totalIncome")}</CardParagraph>
          </Card>
          <br />
          <CenteredContainerDiv>
            {currentReport.items.map(({ key, value }) => {
              return (
                <SubtitleParagraph
                  key={key}
                >{`${key} ${value}`}</SubtitleParagraph>
              );
            })}
          </CenteredContainerDiv>
        </Grid>
        <Grid item xs={4} xl={4}>
          <Card variant="outlined">
            <CardContent>
              <CardParagraph>{currentReport.financedTrees}</CardParagraph>
            </CardContent>
            <CardParagraph>{t("treesFinanced")}</CardParagraph>
          </Card>
          <PieContainerDiv>
            <PieComponent data={getPieData()} />
          </PieContainerDiv>
        </Grid>
        <Grid item xs={4} xl={4}>
          <CenteredContainerDiv>
            Countries:
            {currentReport.countries.map(({ key, value }) => {
              return (
                <ChipContainer key={key}>
                  <Chip label={key} />
                  {`  ${value}`}&euro;
                </ChipContainer>
              );
            })}
          </CenteredContainerDiv>
        </Grid>
      </Grid>
    </TabPanel>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;
  if (value !== index) return <Fragment />;

  return <div>{children}</div>;
}

function showMediaLinks(project: Project) {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://twitter.com/intent/tweet?text=${project.name}`}
      >
        <TwitterIcon color="primary" />
      </a>

      <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
        <FacebookIcon color="primary" />
      </a>

      <a target="_blank" href="https://pinterest.com/" rel="noreferrer">
        <PinterestIcon color="primary" />
      </a>
    </div>
  );
}

// Styled Components

const MainContainer = styled.div`
  padding: 100px 0px;
`;

const LogoHeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px;
`;

const LogoImageDiv = styled.div`
  max-width: 100px;
`;

const TitleHeader = styled.h1`
  color: ${AppColor.Teal};
  text-transform: uppercase;
`;

const ProjectsHeaderDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectsDescriptionDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  border: 1px dashed grey;
`;

const ProjectImg = styled.img`
  max-width: 100%;
`;

const TitleContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleParagraph = styled.p`
  text-transform: uppercase;
  border-left: 5px solid teal;
  padding: 5px;
`;

const SubtitleParagraph = styled.p`
  font-size: larger;
`;

const ChipContainer = styled.div`
  font-size: larger;
`;

const CardParagraph = styled.p`
  text-align: center;
`;

const CenteredContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PieContainerDiv = styled.div`
  width: 400px;
  height: 400px;
`;

const SeparatorDiv = styled.div`
  margin: 50px 0px;
`;

// translations

const translations = {
  [Language.English]: {
    title: `Let's be clear about the numbers`,
    treePlanting: `Tree planting At Ecosia, we plant trees where they're needed
    most. Browse through our tree-planting portfolio to learn where the
    trees stand, which species we plant, and what their impact is. And
    much more!`,
    aboutTransparency: `We're all about transparency. That's why we publish monthly financial
    reports. They keep you in the loop about our latest tree-planting
    projects, how much money we made from your searches, and how we spent
    it. Ecosia is a not-for-profit business. We don't pay out dividends
    and cannot be bought. That way, we're able to use 100% of our profits
    for the planet. Keep in mind that it takes six weeks to process the
    month's payments.`,
    totalIncome: "Total income this month",
    treesFinanced: "Trees financed this month",
  },
  [Language.French]: {},
};

export default withTranslations(translations)(Component);
