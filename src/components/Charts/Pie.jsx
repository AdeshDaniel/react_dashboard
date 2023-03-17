import React from "react";

import {
  AccumulationChartComponent,
  AccumulationSeriesDirective,
  AccumulationSeriesCollectionDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";

const Doughnut = ({ id, data, legendVisibility, height }) => {
  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visibility: legendVisibility, background: "white" }}
      height={height}
      background={currentMode === "Dark" ? "33373E" : "#fff"}
      tooltip={{ enable: true }}
    >
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={data}
          name='Sale'
          yName='y'
          xName='x'
          innerRadius='40%'
          startAngle={0}
          radius='70%'
          endAngle={360}
          explode
          explodeOffset='10%'
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: 600,
              color: "#fff",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationTooltip,
          AccumulationDataLabel,
        ]}
      />
    </AccumulationChartComponent>
  );
};
export default Doughnut;
