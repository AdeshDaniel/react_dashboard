import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  Inject,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { DatePicker } from "@syncfusion/ej2-react-calendars";

import { scheduleData } from "../data/dummy";
import { Header } from "../components";

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Calendars' />
      <ScheduleComponent
        width='auto'
        height='650px'
        ref={""}
        onSelectedDate={new Date(2023, 0, 10)}
        onDragStart={""}
      >
        <ViewsDirective></ViewsDirective>
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
