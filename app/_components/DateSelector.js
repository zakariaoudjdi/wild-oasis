"use client";
import { isWithinInterval, set } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ settings, bookedDate, cabin }) {
  // Example state for range
  const [range, setRange] = useState({ from: undefined, to: undefined });
  // Example state for prices
  const regularPrice = 23;
  const discount = 23;
  const numNights = 23;
  const cabinPrice = 23;

  // SETTINGS
  const minBookingLength = settings?.minBookingLength || 2;
  const maxBookingLength = settings?.maxBookingLength || 30;

  // Reset range handler
  function resetRange() {
    setRange({ from: undefined, to: undefined });
  }

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="place-self-center pt-12"
        mode="range"
        selected={range}
        onSelect={setRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        captionLayout="dropdown"
        numberOfMonths={1}
      />

      <div className="flex h-[72px] items-center justify-between bg-yellow-500 px-8 text-zinc-800">
        <div className="flex items-baseline gap-6">
          <p className="flex items-baseline gap-2">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="font-semibold text-zinc-700 line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-yellow-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-zinc-800 px-4 py-2 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
