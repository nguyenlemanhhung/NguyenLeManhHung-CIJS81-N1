import React from "react";

const navMenu = [
  { title: "Trang chủ", link: "" },
  { title: "Thông tin", link: "" },
  { title: "Hỏi đáp", link: "" },
  { title: "Thành viên", link: "" },
  { title: "Liên hệ", link: "" },
];
function NetlifyHeader() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img
            src={require("../../assets/images/whitefoologohead.png")}
            className="me-2"
          />
          <img src={require("../../assets/images/whitefoologocap.png")} />
        </div>
        <div className="menu d-flex">
          {navMenu.map((item) => {
            return (
              <div className="menu-item" key={item.title}>
                <a href={item.link}>{item.title}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NetlifyHeader;
