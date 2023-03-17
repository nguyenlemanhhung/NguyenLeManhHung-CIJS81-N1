import React, { useState } from "react";
import Description from "./body-components/Description";
import FormInput from "./body-components/FormInput";
import SelectBanner from "./body-components/SelectBanner";
import Settings from "./body-components/Settings";
import ButtonCreateSocial from "./body-components/ButtonCreateSocial";
import Preview from "./Preview";

function Body() {
  const [complete, setComplete] = useState(false);
  const DEFAULT_DATA = {
    date: "",
    time: "",
    address: "",
    capacity: "",
    cost: "",
    description: "",
    image: "",
  };
  const [data, setData] = useState(DEFAULT_DATA);
  {
    console.log(data);
  }
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSelectImage = (image) => {
    setData({ ...data, image });
    console.log("selectImage:", image);
  };
  const handleCreateSocial = () => {
    if (data.date && data.time && data.image && data.description) {
      setComplete(true);
    }
  };
  const handleNewSocial = () => {
    setComplete(false);
    setData(DEFAULT_DATA);
  };
  return (
    <div className="body-container">
      <div className="container">
        {!complete ? (
          <div className="form-page">
            <div className="d-flex">
              <FormInput
                dataInput={[
                  data.date,
                  data.time,
                  data.address,
                  data.capacity,
                  data.cost,
                ]}
                onChange={handleChangeInput}
              />
              <SelectBanner
                handleSelectImage={handleSelectImage}
                imageUrl={data.image}
              />
            </div>
            <Description
              description={data.description}
              onChange={handleChangeInput}
            />
            <Settings />
            <ButtonCreateSocial handleCreateSocial={handleCreateSocial} />
          </div>
        ) : (
          <div className="show-page">
            <Preview data={data} handleNewSocial={handleNewSocial} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Body;
