import React from "react";

const BusBookingInfo = () => {
  return (
    <>
      <h3>Booking Flights</h3>
      <div className="input-group">
        <label htmlFor="">Flying From</label>
        <input
          className="inp-style"
          type="text"
          placeholder="Dhake, Bangladesh"
        />
      </div>

      <div className="input-group">
        <label htmlFor="">Flying To</label>
        <input
          className="inp-style"
          type="text"
          placeholder="New York, United States"
        />
      </div>

      <div className="inputs">
        <div className="input-group">
          <label htmlFor="">Departure</label>
          <input className="inp-style" type="date" name="" />
        </div>

        <div className="input-group">
          <label htmlFor="">Return</label>
          <input className="inp-style" type="date" name="" />
        </div>
      </div>
    </>
  );
};

export default BusBookingInfo;
