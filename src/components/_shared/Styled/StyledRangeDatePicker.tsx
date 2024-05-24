import React from "react";
import { DateRangePicker, DateRangePickerProps } from "@nextui-org/react";
import { parseZonedDateTime } from "@internationalized/date";

export default function StyledRangeDatePicker(props: DateRangePickerProps) {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <DateRangePicker
        labelPlacement="outside"
        visibleMonths={2}
        pageBehavior="single"
        defaultValue={{
          start: parseZonedDateTime("2024-04-01T00:45[America/Los_Angeles]"),
          end: parseZonedDateTime("2024-04-08T11:15[America/Los_Angeles]"),
        }}
        {...props}
      />
    </div>
  );
}
