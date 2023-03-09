import { useState } from "react";

const listChipsChoice = ["Product", "Marketing", "Engineering", "Design"];
function SettingsChipsChoice() {
  const [chipsChoice, setChipsChoice] = useState([]);

  const handleSelectChipsChoice = (item) => {
    setChipsChoice(() => [...chipsChoice, item]);
    console.log(chipsChoice);
  };

  const handleDeleteChipsChoice = (k) => {
    setChipsChoice(() => chipsChoice.filter((item, index) => index !== k));
  };
  return (
    <div className="chips-choice-container">
      <p className="subTitle mb-3">
        Pick tags for our curation engine to work its magin
      </p>
      <div className="select-content mb-3 d-flex flex-wrap">
        {chipsChoice.map((item, index) => {
          return (
            <div className="select-item" key={index}>
              {item}
              <button
                type="button"
                onClick={() => handleDeleteChipsChoice(index)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          );
        })}
      </div>
      <div className="list-chips-choice d-flex">
        {listChipsChoice.map((item, index) => {
          return (
            <div
              onClick={() => handleSelectChipsChoice(item)}
              className="chips-choice-item"
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SettingsChipsChoice;
