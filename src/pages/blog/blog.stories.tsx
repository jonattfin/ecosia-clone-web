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
      totalIncome: 2000 * 1000,
      financedTrees: 1000 * 1000,
      items: [
        { key: "trees", value: 1000 },
        { key: "green-investments", value: 250 },
        { key: "taxes-and-social-security", value: 200 },
        { key: "spreading the word", value: 100 },
        { key: "operational-costs", value: 500 },
      ],
      countries: [
        { key: "brazil", value: 10 },
        { key: "kenya", value: 11 },
        { key: "tanzania", value: 12 },
        { key: "rwanda", value: 13 },
        { key: "mexico", value: 14 },
        { key: "thailand", value: 15 },
      ],
    },
    {
      month: "March 2022",
      totalIncome: 2000 * 1000,
      financedTrees: 1000 * 1000,
      items: [
        { key: "trees", value: 1000 },
        { key: "green-investments", value: 250 },
        { key: "taxes-and-social-security", value: 200 },
        { key: "spreading the word", value: 100 },
        { key: "operational-costs", value: 500 },
      ],
      countries: [
        { key: "brazil", value: 10 },
        { key: "kenya", value: 11 },
        { key: "tanzania", value: 12 },
        { key: "rwanda", value: 13 },
        { key: "mexico", value: 14 },
        { key: "thailand", value: 15 },
      ],
    },
    {
      month: "February 2022",
      totalIncome: 2000 * 1000,
      financedTrees: 1000 * 1000,
      items: [
        { key: "trees", value: 1000 },
        { key: "green-investments", value: 250 },
        { key: "taxes-and-social-security", value: 200 },
        { key: "spreading the word", value: 100 },
        { key: "operational-costs", value: 500 },
      ],
      countries: [
        { key: "brazil", value: 10 },
        { key: "kenya", value: 11 },
        { key: "tanzania", value: 12 },
        { key: "rwanda", value: 13 },
        { key: "mexico", value: 14 },
        { key: "thailand", value: 15 },
      ],
    },
  ];
}
