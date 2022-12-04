import React from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

//value from the input
const FirstClass = ({ value, setValue }) => {
  const firstClassValue = (event) => {
    const currentValue = parseFloat(event.target.value);
    setValue(currentValue);
  };

  const plus = (e) => {
    setValue(value + 1);
  };
  const minus = (e) => {
    setValue(value - 1);
    if (value <= 0) {
      setValue(0);
    }
  };

  return (
    <>
      <div>
        <label htmlFor="">First Class ($150)</label>
        <input
          min={0}
          onChange={firstClassValue}
          className="inp-style inp-width"
          type="number"
          value={value}
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

export default FirstClass;
