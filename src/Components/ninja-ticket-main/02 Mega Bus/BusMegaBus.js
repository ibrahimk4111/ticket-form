import React, { useState } from "react";
import BusBookingInfo from "./BusBookingInfo";
import BusBookingModal from "./BusBookingModal";
import BusEconomy from "./BusEconomy";
import BusFirstClass from "./BusFirstClass";
import "./BusStyle.css";
import BusSubtotal from "./BusSubtotal";

const BusMegaBus = () => {
  const [value, setValue] = useState(0);
  const [EcoValue, setEcoValue] = useState(0);

  return (
    <>
      {/* <!--Booking Section--> */}
      <section>
        <main className="main-content container">
          <div className="booking-form">
            <BusBookingInfo />

            <div className="input-group f-class">
              <BusFirstClass value={value} setValue={setValue}/>
            </div>

            <div className="input-group f-class">
              <BusEconomy EcoValue={EcoValue} setEcoValue={setEcoValue}/>
            </div>

            <div className="calculations">
              <BusSubtotal value={value} EcoValue={EcoValue}></BusSubtotal>
            </div>
            <BusBookingModal />
          </div>

          <div className="booking-content">
            <h1>
              discover <br /> around the world
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicingelit. Provident
              voluptatibus quam fuga laborumalias veniam libero autem quasi
              maxime ullam vero nama imi dolor, architecto ab facilis eaque
              deserunt nobise voluptatibus quam
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default BusMegaBus;
