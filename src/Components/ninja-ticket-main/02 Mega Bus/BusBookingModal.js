import React from "react";

const BusBookingModal = () => {
  return (
    <>
      {/* <!-- The button to open modal --> */}
      <button className="btn-style"><a href="#my-modal-2" >
        Book Now
      </a></button>
      {/* <!-- Put this part before </body> tag --> */}
      <div class="modal" id="my-modal-2">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations!
          </h3>
          <p class="py-4">
            You've been succesfully submitted!
          </p>
          <div class="modal-action">
            <a href="#" class="btn">
              OK
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusBookingModal;
