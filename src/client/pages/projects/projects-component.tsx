import _ from "lodash";
import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { IProjectsProps } from "./types";
import styles from "./projects.module.scss";

export default function Component(props: IProjectsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { projects, news, reports } = props;

  return (
    <div className={styles.projects}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={4}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={4}>
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

          <TabPanel index={1} value={value}>
            <div className={styles["projects-description"]}>
              Tree planting At Ecosia, we plant trees where they're needed most.
              Browse through our tree-planting portfolio to learn where the
              trees stand, which species we plant, and what their impact is. And
              much more!
            </div>
            <div className={styles["projects-container"]}>
              {projects.map((project) => (
                <div className={styles.container} key={project.id}>
                  <img
                    className={styles["image-wrapper"]}
                    src={project.image}
                  ></img>
                  <p>{project.name}</p>
                  <p>{project.country}</p>
                  <p>{project.desc}</p>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel index={2} value={value}>
            <div className={styles["news-container"]}>
              {news.map((n) => (
                <div className={styles.container} key={n.id}>
                  <img className={styles["image-wrapper"]} src={n.image}></img>
                  <p>{n.name}</p>
                  <p>{n.desc}</p>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel index={0} value={value}>
            <div className={styles["reports-container"]}>
              {reports.map((report) => (
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
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;
  if (value !== index) return <Fragment />;

  return <div>{children}</div>;
}
