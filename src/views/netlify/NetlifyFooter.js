import React from "react";

function NetlifyFooter() {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="about-us col-3">
            <div>
              <img src={require("../../assets/images/whitefoologocap.png")} />
            </div>
            <div className="content">
              <p>
                Hệ thống ngân hàng xuyên quốc gia đáng tin cậy. Dẫn đầu trong
                danh sách các ngân hàng được người dùng bình chọn và được tin
                dùng bởi hàng triệu người dùng ở hầu hết các quốc gia trên thế
                giới.
              </p>
            </div>
          </div>
          <div className="intro col-3">
            <h3 className="title">Giới thiệu</h3>
            <div className="content">
              <div className="content-item">
                <a href="">Về chúng tối</a>
              </div>
              <div className="content-item">
                <a href="">Dịch vụ</a>
              </div>
              <div className="content-item">
                <a href="">Tính năng</a>
              </div>
              <div className="content-item">
                <a href="">Bảng giá</a>
              </div>
            </div>
          </div>
          <div className="support col-3">
            <h3 className="title">Hỗ trợ</h3>
            <div className="content">
              <div className="content-item">
                <a href="">Câu hỏi thường gặp</a>
              </div>
              <div className="content-item">
                <a href="">Chính sách bảo mật</a>
              </div>
              <div className="content-item">
                <a href="">Điều khoản sử dụng</a>
              </div>
              <div className="content-item">
                <a href="">Liên hệ</a>
              </div>
            </div>
          </div>
          <div className="contact col-3">
            <h3 className="title">Liên hệ</h3>
            <div className="content">
              <div className="address">
                <span>Địa chỉ:</span>227 Đường Nguyễn Văn Cừ, Phường 4, Quận 5,
                Hồ Chí Minh
              </div>
              <div className="email">
                <span>Email:</span>admin@whitefoo.com
              </div>
              <div className="phone">
                <span>Phone:</span>(+84) 1234567890
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>2020 WhiteFoo Corporation - Copyright lololol</p>
        </div>
      </div>
    </div>
  );
}

export default NetlifyFooter;
