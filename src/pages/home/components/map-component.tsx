import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

import { AboveTitle, TitleKick } from "./styled-components";

const ItemTitle = styled.div`
  font-size: x-large;
  padding-left: 20px;
  border-left: 5px solid teal;
`;

const ItemText = styled.div`
  padding-left: 20px;
  border-left: 5px solid teal;
`;

const DivLinkWrapper = styled.div`
  text-align: right;
  padding-right: 20px;
`;

interface MapComponentProps {
  counter: number;
};

export default function Component({ counter }: MapComponentProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <AboveTitle data-test="map-title">
          Trees planted by ecosia users
        </AboveTitle>
        <TitleKick>{counter}</TitleKick>
      </Grid>
      <Grid item xs={12} xl={3}>
        <ItemTitle>15 Million</ItemTitle>
        <ItemText>People using Ecosia</ItemText>
      </Grid>
      <Grid item xs={12} xl={3}>
        <ItemTitle>500+</ItemTitle>
        <ItemText>Native species</ItemText>
      </Grid>
      <Grid item xs={12} xl={3}>
        <ItemTitle>30+</ItemTitle>
        <ItemText>Countries</ItemText>
      </Grid>
      <Grid item xs={12} xl={3}>
        <ItemTitle>60+</ItemTitle>
        <ItemText>Active projects</ItemText>
      </Grid>
      <Grid item xs={12} xl={12}>
        <DivLinkWrapper>
          <Link href="#" data-test="discover-projects">
            <a>
              Discover our projects <ChevronRightIcon fontSize="small" />
            </a>
          </Link>
        </DivLinkWrapper>
      </Grid>
      <Grid item xs={12} xl={12}>
        &nbsp;
      </Grid>
    </Grid>
  );
}
