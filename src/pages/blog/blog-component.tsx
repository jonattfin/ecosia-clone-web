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
import { Image } from "../../shared-components";

import styles from "./blog.module.scss";
import * as Images from "./components/images";
import { Project } from "@prisma/client";

interface BlogProps {
  projects: Project[];
}

export default function Component({ projects }: BlogProps) {
  const [value, setValue] = React.useState(0);
  const [shownId, setShownId] = React.useState<string>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const imageProps = { width: 150, height: 0, alt: "something special" };
  imageProps.height = imageProps.width * 0.5;

  return (
    <div className={styles.blog}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={3}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={6}>
          <div className={styles["logo-header"]}>
            <div className={styles["logo-image"]}>
              <Image src={Images.LogoImage} {...imageProps}/>
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

          <TabPanel index={0} value={value}>
            <Grid container spacing={2}>
              <Grid item xs={12} xl={12}>
                <div className={styles["projects-description"]}>
                  Tree planting At Ecosia, we plant trees where they&apos;re needed
                  most. Browse through our tree-planting portfolio to learn
                  where the trees stand, which species we plant, and what their
                  impact is. And much more!
                </div>
              </Grid>
              {projects.map((project) => (
                <Grid
                  item
                  xs={12}
                  lg={6}
                  xl={4}
                  key={project.id}
                  onMouseEnter={() => setShownId(project.id)}
                  onMouseLeave={() => setShownId(undefined)}
                >
                  <div className={styles.container}>
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

          <TabPanel index={1} value={value}>
            <div className={styles["news-container"]}></div>
          </TabPanel>

          <TabPanel index={2} value={value}>
            <div className={styles["reports-container"]}></div>
          </TabPanel>
        </Grid>
        <Grid item xs={12} xl={3}>
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
