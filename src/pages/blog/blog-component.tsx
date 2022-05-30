import _ from "lodash";
import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Link from "next/link";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styled from "@emotion/styled";

import { AppColor, Image } from "../../shared-components";
import * as Images from "./components/images";
import { Project } from "@prisma/client";

export interface BlogProps {
  projects: Project[];
}

export default function Component({ projects }: BlogProps) {
  const [value, setValue] = React.useState(0);
  const [shownId, setShownId] = React.useState("");

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
              <Tab value={1} label="News" />
              <Tab value={2} label="Money" />
            </Tabs>
          </ProjectsHeaderDiv>

          <TabPanel index={0} value={value}>
            <Grid container spacing={2}>
              <Grid item xs={12} xl={12}>
                <ProjectsDescriptionDiv>
                  Tree planting At Ecosia, we plant trees where they&apos;re
                  needed most. Browse through our tree-planting portfolio to
                  learn where the trees stand, which species we plant, and what
                  their impact is. And much more!
                </ProjectsDescriptionDiv>
              </Grid>
              {projects.map((project) => (
                <Grid
                  item
                  xs={12}
                  lg={6}
                  xl={4}
                  key={project.id}
                  onMouseEnter={() => setShownId(project.id)}
                  onMouseLeave={() => setShownId("")}
                >
                  <div>
                    <ProjectImg src={project.image}></ProjectImg>
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
        </Grid>
        <Grid item xs={12} xl={3}>
          &nbsp;
        </Grid>
      </Grid>
    </MainContainer>
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
  margin: 50px 0px;
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
