import styled from "@emotion/styled";

import { AboveTitle } from "./styled-components";

const DivParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivChildContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30vh;
`;

const DivTitle = styled.div`
  text-transform: uppercase;
  padding: 15px 0;
  text-align: center;
`;

const DivLine = styled.div`
  border: 3px solid #aab74f;
  margin: 10px 50px;
`;

const DivSubtitle = styled.div`
  text-align: center;
`;

const DivContent = styled.div`
  text-align: center;
`;

export default function Component({}) {
  return (
    <DivParentContainer>
      <AboveTitle>
        Ecosia is a social business founded in 2009 after a trip around the
        world
      </AboveTitle>
      <DivChildContainer>
        {getTimePeriods().map((period, index) => (
          <div key={`period_${index}`}>
            <DivTitle>{period.time}</DivTitle>
            <DivSubtitle>{period.title}</DivSubtitle>
            <DivLine />
            <DivContent>{period.content}</DivContent>
          </div>
        ))}
      </DivChildContainer>
      <div>&nbsp;</div>
    </DivParentContainer>
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
