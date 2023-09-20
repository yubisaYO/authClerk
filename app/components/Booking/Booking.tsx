"use client";

import AutoCompleteAddress from "./AutoCompleteAddress";

function Booking() {
  const screenHeight = window.innerHeight * 0.72;

  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Booking</h2>

      <div
        className={`border-[1px] p-5 h-[${2 + 2}px]`}
        style={{ height: screenHeight }}
      >
        <AutoCompleteAddress />
      </div>
    </div>
  );
}

export default Booking;
