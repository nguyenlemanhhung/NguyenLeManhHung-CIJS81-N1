import React from "react";
import "./Supermomos.css";

function Preview({ data, handleNewSocial }) {
  return (
    <>
      <div>
        <div className="d-flex">
          <div className="col-5 me-3">
            <div
              className="title"
              style={{
                width: "100%",
              }}
            >
              <h1>
                Web3 Founders & Designers Mixer + fireside chat with Coinbase
                Senior Designer & Airfoil founder
              </h1>
            </div>
            <div
              style={{
                color: "#fff",
              }}
            >
              <div className="row mb-4">
                <div className="preview-date col d-flex align-items-center">
                  <i
                    className="bi bi-calendar2-fill me-2"
                    style={{ fontSize: 30 }}
                  ></i>
                  <h3 className="m-0">{data.date}</h3>
                </div>
                <div className="preview-time col d-flex align-items-center">
                  <i
                    className="bi bi-clock-fill me-2"
                    style={{ fontSize: 30 }}
                  ></i>
                  <h3 className="m-0">{data.time}</h3>
                </div>
              </div>
              <div className="w-100 d-flex align-items-center mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                {data.address}
              </div>
              <div className="w-100 d-flex align-items-center mb-5">
                <div className="align-items-center me-5">
                  <i className="bi bi-person-plus-fill me-2"></i>
                  {data.capacity} people
                </div>
                <div className="align-items-center">
                  <i className="bi bi-coin me-2"></i>${data.cost}
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-7"
            style={{
              width: "739px",
              height: "445px",
              border: "1px dashed rgb(242, 242, 242)",
              borderRadius: "0px 64px",
              backgroundImage: `url(${data.image})`,
            }}
          ></div>
        </div>
      </div>
      <div className="w-50 mb-5">{data.description}</div>
      <button
        className="btn-create-social"
        type="button"
        onClick={handleNewSocial}
      >
        New Social
      </button>
    </>
  );
}

export default Preview;
