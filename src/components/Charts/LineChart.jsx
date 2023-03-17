import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  Inject,
  SeriesDirective,
  Legend,
  LineSeries,
  DateTime,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const Line = () => {
  const currentMode = useStateContext();

  return (
    <ChartComponent
      id='Line-chart'
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      tooltip={{ enable: true }}
      chartArea={{ border: { width: 0 } }}
      background={currentMode === "Dark" ? "33373E" : "#fff"}
      legendSettings={{ background: "white" }}
    >
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
      <Inject services={[Legend, DateTime, Tooltip, LineSeries]} />
    </ChartComponent>
  );
};

export default Line;
