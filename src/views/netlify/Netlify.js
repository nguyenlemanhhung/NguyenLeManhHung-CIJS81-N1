import React from "react";
import NetlifyHeader from "./NetlifyHeader";
import NetlifyMain from "./NetlifyMain";
import NetlifyFooter from "./NetlifyFooter";
import "./Netlify.css";

function Netlify() {
  return (
    <div className="netlify-container">
      <NetlifyHeader />
      <NetlifyMain />
      <NetlifyFooter />
    </div>
  );
}

export default Netlify;
