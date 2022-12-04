import React, { useState } from "react";
import BookingInfo from "./BookingInfo";
import BookingModal from "./BookingModal";
import Economy from "./Economy";
import FirstClass from "./FirstClass";
import "./style.css";
import Subtotal from "./Subtotal";

const DiscoverFly = () => {
  const [value, setValue] = useState(0);
  const [EcoValue, setEcoValue] = useState(0);

  return (
    <>
      {/* <!--Booking Section--> */}
      <section>
        <main className="main-content container">
          <div className="booking-form">
            <BookingInfo />

            <div className="input-group f-class">
              <FirstClass value={value} setValue={setValue}/>
            </div>

            <div className="input-group f-class">
              <Economy EcoValue={EcoValue} setEcoValue={setEcoValue}/>
            </div>

            <div className="calculations">
              <Subtotal value={value} EcoValue={EcoValue}></Subtotal>
            </div>
            <BookingModal />
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

export default DiscoverFly;
