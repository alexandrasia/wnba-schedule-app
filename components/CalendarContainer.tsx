import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useSelectedGames } from "@/contexts/SelectedGamesContext";

const CalendarContainer = () => {
  const { selectedGamesKeys } = useSelectedGames();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  console.log("SelectedGamesKeys in CalendarContainer:", selectedGamesKeys);

  return (
    <div className="flex-1 min-w-0 border border-red-500 h-[66vh] p-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        formatters={{
          formatCaption: (date, options) => {
            return format(date, "LLLL yyy", { locale: options?.locale });
          },
        }}
      />
    </div>
  );
};

export default CalendarContainer;
