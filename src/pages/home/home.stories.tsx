import { action } from "@storybook/addon-actions";
import { range } from "lodash";

import HomeComponent from "./home-component";

import * as Components from "./components";
import { withLanguageControls } from "../../helpers";

export default function Index() {
  return <div></div>;
}

export const SearchComponent = withLanguageControls(
  Components.SearchComponent,
  {
    onSearch: action("onSearch"),
    counter: 100,
  }
);

export const CountriesComponent = withLanguageControls(
  Components.CountriesComponent
);

export const MapComponent = withLanguageControls(Components.MapComponent, {
  counter: 100,
});

export const FinancialComponent = withLanguageControls(
  Components.FinancialComponent
);

export const WhyChooseUsComponent = withLanguageControls(
  Components.WhyChooseUsComponent
);

export const JoinUsComponent = withLanguageControls(Components.JoinUsComponent);

export const HomePageIndex = withLanguageControls(HomeComponent, {
  q: 'hello',
  counter: 100,
  onSearch: action("onSearch"),
  onSearchValueSelected: action("onSearchValueSelected"),
  data: getData('hello'),
});

function getData(query: string) {
  return range(1, 10).map((element) => ({
    url: `url ${element}`,
    snippet: `snippet ${element} ${query}`,
    name: `name ${element}`,
  }));
}
