import { withLanguageControls } from "../../helpers";
import BlogComponent from "./blog-component";

export default function Index() {
  return <div></div>;
}

export const BlogIndex = withLanguageControls(BlogComponent, {
  projects: [],
  reports: getReports(),
});

export function getReports() {
  return [
    {
      month: "April 2022",
      items: [
        { name: "trees", value: 1000 },
        { name: "green-investments", value: 250 },
        { name: "taxes-and-social-security", value: 200 },
        { name: "spreading the word", value: 100 },
        { name: "operational-costs", value: 500 },
      ],
      countries: [
        { name: "brazil", value: 10 },
        { name: "kenya", value: 11 },
        { name: "tanzania", value: 12 },
        { name: "rwanda", value: 13 },
        { name: "mexico", value: 14 },
        { name: "thailand", value: 15 },
      ],
    },
    {
      month: "March 2022",
      items: [
        { name: "trees", value: 1000 },
        { name: "green-investments", value: 250 },
        { name: "taxes-and-social-security", value: 200 },
        { name: "spreading the word", value: 100 },
        { name: "operational-costs", value: 500 },
      ],
      countries: [
        { name: "brazil", value: 10 },
        { name: "kenya", value: 11 },
        { name: "tanzania", value: 12 },
        { name: "rwanda", value: 13 },
        { name: "mexico", value: 14 },
        { name: "thailand", value: 15 },
      ],
    },
    {
      month: "February 2022",
      items: [
        { name: "trees", value: 1000 },
        { name: "green-investments", value: 250 },
        { name: "taxes-and-social-security", value: 200 },
        { name: "spreading the word", value: 100 },
        { name: "operational-costs", value: 500 },
      ],
      countries: [
        { name: "brazil", value: 10 },
        { name: "kenya", value: 11 },
        { name: "tanzania", value: 12 },
        { name: "rwanda", value: 13 },
        { name: "mexico", value: 14 },
        { name: "thailand", value: 15 },
      ],
    },
  ];
}
