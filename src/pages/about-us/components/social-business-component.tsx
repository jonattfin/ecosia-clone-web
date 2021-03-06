import styled from "@emotion/styled";
import { ITranslationFunc, withTranslations } from "../../../helpers";
import { Language } from "../../../providers/context";

import { MainTitleDiv } from "../../../shared-components";

const Component = ({ t }: { t: ITranslationFunc }) => {
  return (
    <section>
      <ParentDiv>
        <MainTitleDiv>{t("ecosiaDescription")}</MainTitleDiv>
        <ChildDiv>
          {getTimePeriods().map((period, index) => (
            <div key={`period_${index}`}>
              <TitleDiv>{period.time}</TitleDiv>
              <ContentDiv>{period.title}</ContentDiv>
              <LineDiv />
              <ContentDiv>{t(period.content)}</ContentDiv>
            </div>
          ))}
        </ChildDiv>
        <div />
      </ParentDiv>
    </section>
  );
};

function getTimePeriods() {
  return [
    {
      time: "December 2009",
      title: "ecosia is born",
      content: "ecosiaIsBornContent",
    },
    {
      time: "2009 - 2011",
      title: "People's choice",
      content: "peopleChoiceContent",
    },
    {
      time: "April 2014",
      title: "First German B Corp",
      content: "firstGermanBContent",
    },
    {
      time: "April 2018",
      title: "25 million trees",
      content: "plantingMilestoneContent",
    },
  ];
}

// Styled Components

const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChildDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40vh;
`;

const TitleDiv = styled.div`
  text-transform: uppercase;
  padding: 15px 0;
  text-align: center;
`;

const LineDiv = styled.div`
  border: 3px solid #aab74f;
  margin: 10px 50px;
`;

const ContentDiv = styled.div`
  text-align: center;
`;

// translations

const translations = {
  [Language.English]: {
    ecosiaDescription:
      "Ecosia is a social business founded in 2009 after a trip around the world",
    ecosiaIsBornContent:
      "Christian founded Ecosia.org after a trip around the world helped him understand the problems of deforestation.",
    peopleChoiceContent:
      "ecosia won several awards for its clever concept and speedy growth in Europe and beyond.",
    firstGermanBContent:
      "Ecosia was the first German company to become a B Corporation thanks to its social business model.",
    plantingMilestoneContent:
      "A planting milestone! That same year, Ecosia also builds its own solar energy plant to power every search.",
  },
  [Language.French]: {
    ecosiaDescription:
      "Ecosia est une entreprise sociale fond??e en 2009 apr??s un voyage autour du monde",
    ecosiaIsBornContent:
      "Christian a fond?? Ecosia.org apr??s un voyage autour du monde qui l'a aid?? ?? comprendre les probl??mes de la d??forestation.",
    peopleChoiceContent:
      "Ecosia a remport?? plusieurs prix pour son concept intelligent et sa croissance rapide en Europe et au-del??.",
    firstGermanBContent:
      "Ecosia a ??t?? la premi??re entreprise allemande ?? devenir une B Corporation gr??ce ?? son mod??le d'entreprise sociale.",
    plantingMilestoneContent:
      "Une ??tape importante dans la plantation! La m??me ann??e, Ecosia construit ??galement sa propre centrale solaire pour alimenter toutes les recherches.",
  },
};

export default withTranslations(translations)(Component);
