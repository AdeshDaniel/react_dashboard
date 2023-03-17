import React from "react";
import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  Inject,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
  HiloSeries,
} from "@syncfusion/ej2-react-charts";
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from "../../components";

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category='Financial' title='Apple Financial' />
      <div className='w-full'>
        <ChartComponent
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <SeriesCollectionDirective>
            {financialChartData.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
          <Inject
            services={[
              Tooltip,
              DateTime,
              Zoom,
              Logarithmic,
              Crosshair,
              HiloSeries,
            ]}
          />
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
