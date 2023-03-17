import React from "react";

const listImages = [
  {
    name: "banner-1",
    imgUrl: require("../../../assets/images/choose-banner/banner_1.webp"),
  },
  {
    name: "banner-2",
    imgUrl: require("../../../assets/images/choose-banner/banner_2.webp"),
  },
  {
    name: "banner-3",
    imgUrl: require("../../../assets/images/choose-banner/banner_3.webp"),
  },
  {
    name: "banner-4",
    imgUrl: require("../../../assets/images/choose-banner/banner_4.webp"),
  },
  {
    name: "banner-5",
    imgUrl: require("../../../assets/images/choose-banner/banner_5.webp"),
  },
  {
    name: "banner-6",
    imgUrl: require("../../../assets/images/choose-banner/banner_6.webp"),
  },
  {
    name: "banner-10",
    imgUrl: require("../../../assets/images/choose-banner/banner_10.webp"),
  },
];

function SelectBanner({ handleSelectImage, imageUrl }) {
  return (
    <div className="select-container">
      <div
        className="preview-banner d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        {!imageUrl ? (
          <div
            style={{
              color: "#14597A",
              fontSize: 20,
              fontWeight: "bold",
              lineHeight: 19,
            }}
          >
            <i className="bi bi-image me-2"></i>
            <span>Add a banner</span>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Choose banner
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="list-image-small">
                {listImages.map((item, index) => {
                  return (
                    <div className="image-small" key={index}>
                      <img
                        alt="img"
                        src={item.imgUrl}
                        onClick={() => handleSelectImage(item.imgUrl)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectBanner;
