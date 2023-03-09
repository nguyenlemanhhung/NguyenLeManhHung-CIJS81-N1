import React from "react";
import Description from "./body-components/Description";
import FormInput from "./body-components/FormInput";
import SelectBanner from "./body-components/SelectBanner";
import Settings from "./body-components/Settings";
import ButtonCreateSocial from "./body-components/ButtonCreateSocial";

function Body() {
  return (
    <div className="body-container">
      <div className="container">
        <div className="d-flex">
          <FormInput />
          <SelectBanner />
        </div>
        <Description />
        <Settings />
        <ButtonCreateSocial />
      </div>
    </div>
  );
}

export default Body;
