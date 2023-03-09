import React from "react";

function FormInput() {
  return (
    <div className="Form-container p-5 w-100">
      <div className="title">
        <h1>untitle Event </h1>
      </div>
      <div className="form">
        <div className="time-group row mb-4">
          <div className="col d-flex justify-content-center align-items-center">
            <i
              className="bi bi-calendar2-fill me-2"
              style={{ fontSize: 30 }}
            ></i>
            <input type="date" placeholder="Date" autoComplete="off" value="" />
          </div>
          <div className="col d-flex justify-content-center align-items-center ">
            <i className="bi bi-clock-fill me-2" style={{ fontSize: 30 }}></i>
            <input type="time" placeholder="Time" />
          </div>
        </div>
        <div className="address-group mb-3 d-flex justify-content-center align-items-center">
          <i className="bi bi-geo-alt-fill me-2"></i>
          <input type="text" placeholder="Address" />
        </div>
        <div className="row mb-3 ">
          <div className="col d-flex justify-content-center align-items-center">
            <i className="bi bi-person-plus-fill me-2"></i>
            <input type="text" placeholder="Max capacity" />
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <i className="bi bi-coin me-2"></i>
            <input type="text" placeholder="Cost per person" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormInput;
