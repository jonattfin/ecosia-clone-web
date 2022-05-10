import AboutUsComponent from './about-us-component';
import * as Components from './components';

// export default () => <div></div>

export const BannerComponent = () => {
  return <Components.BannerComponent />
}

export const ContactUsComponent = () => {
  return <Components.ContactUsComponent />
}
ContactUsComponent.parameters = {
  storyshots: { disable: true },
};

export const HireComponent = () => {
  return <Components.HireComponent />
}

export const MeetTheTeamComponent = () => {
  return <Components.MeetTheTeamComponent />
}

export const SocialBusinessComponent = () => {
  return <Components.SocialBusinessComponent />
}

export const AboutUsPage = () => {
  const props = {
  };

  return <AboutUsComponent />;
}
AboutUsPage.parameters = {
  storyshots: { disable: true },
};
