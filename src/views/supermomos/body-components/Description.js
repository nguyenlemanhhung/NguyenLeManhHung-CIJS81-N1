import React from "react";

function Description({ onChange }) {
  return (
    <div className="description-container mb-4">
      <p className="title mb-3">Description</p>
      <textarea
        onChange={(e) => onChange(e)}
        name="description"
        className="input-description"
        placeholder="Description of your event.."
        rows={10}
        style={{
          width: "50%",
          borderRadius: "10px",
          padding: "10px",
        }}
        defaultValue=""
      />
    </div>
  );
}

export default Description;
