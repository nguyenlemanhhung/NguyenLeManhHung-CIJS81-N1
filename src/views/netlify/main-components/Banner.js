import React from "react";
import Background from "../../../assets/images/header-banner.png";

function Banner() {
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="container">
        <div className="banner-content">
          <h1 className="banner-title">Thanh toán không thể đơn giản hơn</h1>
          <p className="banner-subTitle mt-4 mb-4">
            Hệ thống ngân hàng Internet hiện đại được tạo ra dành cho bạn.
          </p>
          <button>Bắt đầu</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
