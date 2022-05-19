import { useRouter } from "next/router";
import LinearProgress from "@mui/material/LinearProgress";
import { Grid } from "@mui/material";

import api from "../../api";
import styles from "./project.module.scss";
import Image from "next/image";

export default () => {
  const router = useRouter();
  const { pid } = router.query;

  // const projects = api.getProjects();
  // const project = projects.data.filter((p) => p.id === pid)[0] || {};

  const project = {
    image:
      "https://blog.ecosia.org/content/images/size/w1200/2021/08/Thailand_header.png",
  };

  return (
    <div className={styles.project}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={4}>
          &nbsp;
        </Grid>
        <Grid item xs={12} xl={4}>
          <Content isLoading={false} isError={false}>
            <div className={styles.container}>
              <img src={project.image}></img>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} xl={4}>
                  <p>trees planted</p>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <p>hectares restored</p>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <p>since</p>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <p className={styles.teal}>9000</p>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <p className={styles.orange}>updating</p>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <p className={styles.green}>2001</p>
                </Grid>
                <Grid item xs={12} xl={12}>
                  <h1>From monoculture to sustainable rubber farming</h1>
                </Grid>
                <Grid item xs={12} xl={6}>
                  <p>
                    In Thailand, we are partnering with the Prince of Songkhla
                    University and Einhorn to support rubber farmers who are
                    interested in transforming their monocultures into
                    sustainable agroforestry systems.{" "}
                  </p>
                </Grid>
                <Grid item xs={12} xl={6}>
                  &nbsp;
                </Grid>
                <Grid item xs={12} xl={4}>
                  <p>Partners</p>
                  <p>Prince of Songkhla University/Einhorn</p>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <p>Planting method</p>
                  <p>Nursery, intercropping</p>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <p>Planting season</p>
                  <p>August to January</p>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <p>Main threats</p>
                  <p>Monoculture rubber plantations</p>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <p>Wildlife protected </p>
                  <p>updating</p>
                </Grid>
                <Grid item xs={12} xl={4}>
                  <p>Challenges </p>
                  <p>global demand for rubber at competetitive prices</p>
                </Grid>
              </Grid>
            </div>
          </Content>
        </Grid>
        <Grid item xs={12} xl={4}>
          &nbsp;
        </Grid>
      </Grid>
    </div>
  );
};

interface ContentProps {
  children?: React.ReactNode;
  isLoading: boolean;
  isError: any;
}

function Content(props: ContentProps) {
  const { children, isLoading, isError } = props;

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <div>{children}</div>;
}
