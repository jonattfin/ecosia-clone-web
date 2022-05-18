import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import {
  FacebookRounded,
  PublicRounded,
  EmojiPeopleRounded,
  PianoRounded,
} from "@mui/icons-material";

import styles from "./footer.module.scss";

export default function Component() {
  return (
    <div className={styles.footer}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <div className={styles.line} />
          <div className={styles.container}>
            <FacebookRounded />
            <PublicRounded />
            <EmojiPeopleRounded />
            <PianoRounded />
          </div>
        </Grid>
        <Grid item xs={12} xl={12}>
          <div className={styles.explanation}>
            Ecosia GmbH does not assume responsibility for the content of sites
            to which it links and the way in which search results are displayed.
            To learn more please read our privacy policy and our terms of
            service.
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
