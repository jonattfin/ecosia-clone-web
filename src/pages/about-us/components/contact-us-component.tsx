import { TextField, Button, MenuItem, Grid } from "@mui/material";

import styles from "../about-us.module.scss";

export default function Component() {
  return (
    <section className={styles["contact-us-section"]}>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={12}>
          <div className={styles["parent-container"]}>
            <div className={styles["main-title"]}>Contact us</div>
            <div className={styles["main-subtitle"]}>
              For questions about Ecosia check our FAQ first. <br />
              If you don&apos;t see what you are looking for, drop us a line!
            </div>
            <div className={styles["child-container"]}>
              <TextField
                className={styles["extra-field"]}
                variant="outlined"
                label="Message"
                multiline
                rows={5}
              ></TextField>
              <TextField
                className={styles["extra-field"]}
                variant="outlined"
                label="E-mail"
              />
              <TextField
                className={styles["extra-field"]}
                variant="outlined"
                label="Subject"
                select
              >
                {getFilterOptions().map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
                ))}
              </TextField>
              <Button variant="contained">Send</Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}

function getFilterOptions() {
  return ["Subject", "Technical problem", "General inquiry", "Press inquiry"];
}
