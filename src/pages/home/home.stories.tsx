import { action } from "@storybook/addon-actions";
import { ComponentStory } from "@storybook/react";

import HomeComponent, { HomeComponentProps } from "./home-component";

import * as Components from "./components";
import { Language } from "../../providers/context";

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

export const SearchComponent = (args: any) => (
  <Components.SearchComponent {...args} />
);
SearchComponent.args = {
  onSearch: action("onSearch"),
  counter: 100,
};
SearchComponent.argTypes = {
  language: {
    options: [Language.English, Language.French],
    control: { type: "select" },
  },
};

export const CountriesComponent = (args: any) => (
  <Components.CountriesComponent {...args} />
);
CountriesComponent.argTypes = {
  language: {
    options: [Language.English, Language.French],
    control: { type: "select" },
  },
};

export const MapComponent = (args: any) => (
  <Components.MapComponent {...args} />
);
MapComponent.args = {
  counter: 100,
};
MapComponent.argTypes = {
  language: {
    options: [Language.English, Language.French],
    control: { type: "select" },
  },
};

export const FinancialComponent = (args: any) => (
  <Components.FinancialComponent {...args} />
);
FinancialComponent.args = {};
FinancialComponent.argTypes = {
  language: {
    options: [Language.English, Language.French],
    control: { type: "select" },
  },
};

export const WhyChooseUsComponent = (args: any) => (
  <Components.WhyChooseUsComponent {...args} />
);
WhyChooseUsComponent.argTypes = {
  language: {
    options: [Language.English, Language.French],
    control: { type: "select" },
  },
};

export const JoinUsComponent = (args: any) => (
  <Components.JoinUsComponent {...args} />
);
JoinUsComponent.argTypes = {
  language: {
    options: [Language.English, Language.French],
    control: { type: "select" },
  },
};

export const HomePageIndex = (args: any) => <HomeComponent {...args} />;
HomePageIndex.args = {
  counter: 100,
  onSearch: action("onSearch"),
};
HomePageIndex.argTypes = {
  language: {
    options: [Language.English, Language.French],
    control: { type: "select" },
  },
};
