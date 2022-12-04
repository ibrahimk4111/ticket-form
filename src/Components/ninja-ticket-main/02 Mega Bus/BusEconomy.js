import React from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

//value from the input
const BusEconomy = ({ EcoValue, setEcoValue }) => {
  const EconomyValue = (event) => {
    const currentValue = parseFloat(event.target.value);
    setEcoValue(currentValue);
  };

  const plus = (e) => {
    setEcoValue(EcoValue + 1);
  };
  const minus = (e) => {
    setEcoValue(EcoValue - 1);
    if (EcoValue <= 0) {
      setEcoValue(0);
    }
  };

  return (
    <>
      <div>
        <label htmlFor="">Economy ($100)</label>
        <input
          min={0}
          onChange={EconomyValue}
          className="inp-style inp-width"
          type="number"
          name=""
          value={EcoValue}
        />
      </div>
      <div className="plus-minus-btn">
        <p>
          <button onClick={plus}>
            <BsFillArrowUpCircleFill />
          </button>{" "}
          <button onClick={minus}>
            <BsFillArrowDownCircleFill />
          </button>
        </p>
      </div>
    </>
  );
};

export default BusEconomy;
