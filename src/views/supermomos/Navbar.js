import React from "react";

const navMenu = [
  { title: "Blog", link: "" },
  { title: "Socials", link: "" },
  { title: "Past Socials", link: "" },
  { title: "Clubs", link: "" },
  { title: "Contact", link: "" },
];

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
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

export default Navbar;
