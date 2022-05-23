import HowItWorksPage from ".";
import * as Components from "./components";

export default () => <div></div>;

export const BrandsComponent = () => {
  const props = { showImages: false };
  return <Components.BrandsComponent {...props} />;
};

export const GraphicsComponent = () => {
  const props = {};
  return <Components.GraphicsComponent {...props} />;
};

export const HowItWorksComponent = () => {
  const props = { showImages: false };
  return <Components.HowItWorksComponent {...props} />;
};

export const PlantTreesComponent = () => {
  const props = {};
  return <Components.PlantTreesComponent {...props} />;
};

export const ReportsComponent = () => {
  const props = { showImages: false };
  return <Components.ReportsComponent {...props} />;
};

export const HowItWorksPageIndex = () => {
  const props = {};

  return <HowItWorksPage {...props} />;
};
