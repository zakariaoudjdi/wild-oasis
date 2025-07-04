"use client";
import { createContext, useState, useContext } from "react";

const ReservationsContext = createContext();
const initialState = {
  range: { from: undefined, to: undefined },
};
const ReservationsProvider = ({ children }) => {
  const [range, setRange] = useState(initialState.range);
  function resetRange() {
    setRange(initialState.range);
  }

  return (
    <ReservationsContext.Provider
      value={{
        range,
        setRange,
        resetRange,

      }}
    >
      {children}
    </ReservationsContext.Provider>
  );
};

function useReservations() {
  const context = useContext(ReservationsContext);
  if (!context) {
    throw new Error(
      "useReservations must be used within a ReservationsProvider",
    );
  }
  return context;
}

export { ReservationsContext, ReservationsProvider, useReservations };
