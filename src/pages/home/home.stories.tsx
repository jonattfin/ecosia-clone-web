import { action } from "@storybook/addon-actions";

import HomeComponent from "./home-component";

import * as Components from "./components";

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
PieComponent.parameters = {
  storyshots: { disable: true },
};

export const SearchComponent = () => {
  const props = {
    onSearch: action("onSearch"),
    counter: 100,
  };

  return <Components.SearchComponent {...props} />;
};

export const CountriesComponent = () => {
  const props = {};

  return <Components.CountriesComponent {...props} />;
};

export const MapComponent = () => {
  const props = {
    counter: 0,
  };

  return <Components.MapComponent {...props} />;
};

export const FinancialComponent = () => {
  const props = {};
  return <Components.FinancialComponent {...props} />;
};
FinancialComponent.parameters = {
  storyshots: { disable: true },
};

export const WhyChooseUsComponent = () => {
  const props = {};
  return <Components.WhyChooseUsComponent {...props} />;
};

export const JoinUsComponent = () => {
  const props = {};
  return <Components.JoinUsComponent {...props} />;
};

export const HomePageIndex = () => {
  const props = {
    counter: 100,
    onSearch: action("onSearch"),
  };

  return <HomeComponent {...props} />;
};
HomePageIndex.parameters = {
  storyshots: { disable: true },
};
