import styled from "@emotion/styled";

import { MainTitleDiv } from "../../../shared-components";

export default function Component() {
  return (
    <section>
      <ParentDiv>
        <MainTitleDiv>
          Ecosia is a social business founded in 2009 after a trip around the
          world
        </MainTitleDiv>
        <ChildDiv>
          {getTimePeriods().map((period, index) => (
            <div key={`period_${index}`}>
              <TitleDiv>{period.time}</TitleDiv>
              <ContentDiv>{period.title}</ContentDiv>
              <LineDiv />
              <ContentDiv>{period.content}</ContentDiv>
            </div>
          ))}
        </ChildDiv>
        <div />
      </ParentDiv>
    </section>
  );
}

function getTimePeriods() {
  return [
    {
      time: "December 2009",
      title: "Ecosia is born",
      content:
        "Christian founded Ecosia.org after a trip around the world helped him understand the problems of deforestation.",
    },
    {
      time: "2009 - 2011",
      title: "People's choice",
      content:
        "Ecosia won several awards for its clever concept and speedy growth in Europe and beyond.",
    },
    {
      time: "April 2014",
      title: "First German B Corp",
      content:
        "Ecosia was the first German company to become a B Corporation thanks to its social business model.",
    },
    {
      time: "April 2018",
      title: "25 million trees",
      content:
        "A planting milestone! That same year, Ecosia also builds its own solar energy plant to power every search.",
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
