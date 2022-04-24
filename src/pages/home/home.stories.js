import { action } from '@storybook/addon-actions';

import HomeComponent from './home-component';
import { withRouter } from '../../helpers';

import * as Components from './components';
import { getLanguage } from './languages';
import { Languages } from '../../language';

export default () => <div></div>

const commonProps = {
  language: getLanguage(Languages.En)
};

export const PieComponent = () => {
  return (
    <div style={{ height: '40vh', width: '30vw' }}>
      <Components.PieComponent />
    </div>
  );
}
PieComponent.parameters = {
  storyshots: { disable: true },
};

export const SearchComponent = () => {
  const props = {
    onSearch: action('onSearch'),
    counter: 100,
    ...commonProps
  };

  return <Components.SearchComponent {...props} />
}

export const CountriesComponent = () => {
  const props = {
    ...commonProps
  };

  return <Components.CountriesComponent {...props} />
}

export const MapComponent = () => {
  const props = {
    counter: 0,
    ...commonProps
  };

  return withRouter(Components.MapComponent, props);
}

export const FinancialComponent = () => {
  const props = {
    ...commonProps
  };
  return withRouter(Components.FinancialComponent, props);
}
FinancialComponent.parameters = {
  storyshots: { disable: true },
};


export const WhyChooseUsComponent = () => {
  const props = {
    ...commonProps
  };
  return withRouter(Components.WhyChooseUsComponent, props);
}

export const JoinUsComponent = () => {
  const props = {
    ...commonProps
  };
  return <Components.JoinUsComponent {...props} />
}

export const HomePageIndex = () => {
  const props = {
    counter: 100,
    onSearch: action('onSearch'),
    ...commonProps
  };

  return withRouter(HomeComponent, props);
}
HomePageIndex.parameters = {
  storyshots: { disable: true },
};
