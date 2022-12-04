import React from "react";

const Subtotal = ({value, EcoValue}) => {
    //Total Value by choosing First Class Value and Economy Class value
    const valueFromFirstClass = value * 150; 
    const valueFromEconomyClass = EcoValue * 100
    const totalValue = (valueFromFirstClass + valueFromEconomyClass)

    //Total Charge at 10% VAT
    const vatCharge = (totalValue * 0.1)

    return ( 
        <>
            <div className="amount">
                <div className="left">
                  <p>Subtotal</p>
                </div>
                <div className="right">
                  <p>{ !value && !EcoValue ? 0 : totalValue}</p>
                </div>
              </div>

              <div className="amount">
                <div className="left">
                  <p>Charge 10% VAT</p>
                </div>
                <div className="right">
                  <p>{vatCharge}</p>
                </div>
              </div>
              <hr />
              <div className="amount">
                <div className="left">
                  <h4>Total</h4>
                </div>
                <div className="right">
                  <p>{vatCharge + totalValue}</p>
                </div>
              </div>
        </>
     );
}
 
export default Subtotal;