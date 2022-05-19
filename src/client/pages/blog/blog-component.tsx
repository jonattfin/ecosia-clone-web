import _ from "lodash";
import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LinearProgress from "@mui/material/LinearProgress";
import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Link from "next/link";

import { IProjectsProps } from "./types";
import styles from "./blog.module.scss";
import * as Images from "./components/images";
import { IProject } from "../../../shared/types";


export default function Component(props: IProjectsProps) {
  const [value, setValue] = React.useState(0);
  const [shownId, setShownId] = React.useState<string>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { projects, news, reports } = props;

  return (
    <div className={styles.blog}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={4}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={4}>
          <div className={styles["logo-header"]}>
            <div className={styles["logo-image"]}>
              <Image src={Images.LogoImage} />
            </div>
            <h1 className={styles["blog-title"]}>Blog</h1>
          </div>

          <div className={styles["projects-header"]}>
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
          </div>

          <TabPanel
            index={0}
            value={value}
            isLoading={projects.isLoading}
            isError={projects.isError}
          >
            <div className={styles["projects-description"]}>
              Tree planting At Ecosia, we plant trees where they're needed most.
              Browse through our tree-planting portfolio to learn where the
              trees stand, which species we plant, and what their impact is. And
              much more!
            </div>
            <div className={styles["projects-container"]}>
              {projects.data.map((project) => (
                <Link href={`/projects/${project.id}`} key={project.id}>
                  <div
                    className={styles.container}
                    onMouseEnter={() => setShownId(project.id)}
                    onMouseLeave={() => setShownId(undefined)}
                  >
                    <img
                      className={styles["image-wrapper"]}
                      src={project.image}
                    ></img>
                    <div className={styles["title-container"]}>
                      <p className={styles.title}>{project.scope}</p>
                      {shownId === project.id && showMediaLinks(project)}
                    </div>
                    <p className={styles.subtitle}>{project.name}</p>
                    <p>{project.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </TabPanel>

          <TabPanel
            index={1}
            value={value}
            isLoading={news.isLoading}
            isError={news.isError}
          >
            <div className={styles["news-container"]}>
              {news.data.map((n) => (
                <div className={styles.container} key={n.id}>
                  <img className={styles["image-wrapper"]} src={n.image}></img>
                  <p>{n.name}</p>
                  <p>{n.desc}</p>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel
            index={2}
            value={value}
            isLoading={reports.isLoading}
            isError={reports.isError}
          >
            <div className={styles["reports-container"]}>
              {reports.data.map((report) => (
                <div className={styles.container} key={report.id}>
                  <img
                    className={styles["image-wrapper"]}
                    src={report.image}
                  ></img>
                  <p>{report.name}</p>
                  <p>{report.country}</p>
                  <p>{report.desc}</p>
                </div>
              ))}
            </div>
          </TabPanel>
        </Grid>
        <Grid item xs={12} xl={4}>
          &nbsp;
        </Grid>
      </Grid>
    </div>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  isLoading: boolean;
  isError: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, isLoading, isError } = props;
  if (value !== index) return <Fragment />;

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <div>{children}</div>;
}

function showMediaLinks(project: IProject) {
  return (
    <div>
      <a
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${project.name}`}
      >
        <TwitterIcon color="primary" />
      </a>

      <a target="_blank" href="https://www.facebook.com">
        <FacebookIcon color="primary" />
      </a>

      <a target="_blank" href="https://pinterest.com/">
        <PinterestIcon color="primary" />
      </a>
    </div>
  );
}
