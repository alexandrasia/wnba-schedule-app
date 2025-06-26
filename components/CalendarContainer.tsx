import React from "react";
import { Calendar } from "antd";
import dayjs from "dayjs";

const CalendarContainer = () => {
  return (
    <div className="flex-1 min-w-0 border border-red-500 h-[66vh]">
      <Calendar />
    </div>
  );
};

export default CalendarContainer;
