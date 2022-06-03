import { action } from "@storybook/addon-actions";

import HomeComponent from "./home-component";

import * as Components from "./components";
import { withLanguageControls } from "../../helpers";

export default function Index() {
  return <div></div>;
}

export const PieComponent = () => {
  return (
    <div style={{ height: "40vh", width: "30vw" }}>
      <Components.PieComponent />
    </div>
  );
};

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
  counter: 100,
  onSearch: action("onSearch"),
});
