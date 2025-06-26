import React from "react";
import { Calendar } from "antd";

const CalendarContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div style={{ width: 400, height: 400 }}>
        <Calendar />
      </div>
    </div>
  );
};
export default CalendarContainer;
