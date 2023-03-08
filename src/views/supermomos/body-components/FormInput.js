import React from "react";

function FormInput() {
  return (
    <div className="Form-container">
      <div className="form">
        <div className="time-group">
          <input type="date" placeholder="Date" autoComplete="off" value="" />
          <input type="time" placeholder="Time" />
        </div>
        <div className="address-input">
          <input type="text" placeholder="Address" />
        </div>
        <div className=""></div>
      </div>
      <div className="select-banner"></div>
    </div>
  );
}

export default FormInput;
