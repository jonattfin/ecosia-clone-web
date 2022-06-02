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

const SearchComponentTemplate: ComponentStory<
  typeof Components.SearchComponent
> = (args) => <Components.SearchComponent {...args} />;

export const SearchComponent = SearchComponentTemplate.bind({});
SearchComponent.args = {
  onSearch: action("onSearch"),
  counter: 100,
  language: Language.English,
};
SearchComponent.argTypes = {
  language: {
    options: [Language.English, Language.French],
    control: { type: "select" },
  },
};

export const CountriesComponent = () => <Components.CountriesComponent />;

const MapComponentTemplate: ComponentStory<typeof Components.MapComponent> = (
  args
) => <Components.MapComponent {...args} />;

export const MapComponent = MapComponentTemplate.bind({});
MapComponent.args = {
  counter: 100,
};

export const FinancialComponent = () => <Components.FinancialComponent />;

export const WhyChooseUsComponent = () => <Components.WhyChooseUsComponent />;

export const JoinUsComponent = () => <Components.JoinUsComponent />;

const HomePageIndexTemplate: ComponentStory<typeof HomeComponent> = (args) => (
  <HomeComponent {...args} />
);

export const HomePageIndex = HomePageIndexTemplate.bind({});
HomePageIndex.args = {
  counter: 100,
  onSearch: action("onSearch"),
};
