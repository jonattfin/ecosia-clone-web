import { ResponsivePie } from "@nivo/pie";

const commonProperties = {
  animate: true,
  activeOuterRadiusOffset: 8,
  margin: { left: 120 },
};

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function Component({ data = getData() /* see data tab */ }) {
  return (
    <ResponsivePie
      {...commonProperties}
      data={data}
      innerRadius={0.6}
      padAngle={0.5}
      cornerRadius={5}
      enableArcLabels={false}
      arcLinkLabelsColor={{
        from: "color",
      }}
      arcLinkLabelsThickness={3}
      arcLinkLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 1.2]],
      }}
    />
  );
}

function getData() {
  return [
    {
      id: "trees",
      label: "trees",
      value: 1128621,
      color: "hsl(74, 70%, 50%)",
    },
    {
      id: "green_investments",
      label: "green_investments",
      value: 287981,
      color: "hsl(67, 70%, 50%)",
    },
    {
      id: "taxes",
      label: "taxes",
      value: 423000,
      color: "hsl(344, 70%, 50%)",
    },
    {
      id: "spreading_the_word",
      label: "spreading_the_word",
      value: 53655,
      color: "hsl(160, 70%, 50%)",
    },
    {
      id: "operational_costs",
      label: "operational_costs",
      value: 483226,
      color: "hsl(58, 70%, 50%)",
    },
  ];
}
