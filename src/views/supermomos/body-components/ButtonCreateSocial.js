import React from "react";

function ButtonCreateSocial({ handleCreateSocial }) {
  return (
    <div className="create-social">
      <button className="btn-create-social" onClick={handleCreateSocial}>
        Create Social
      </button>
    </div>
  );
}

export default ButtonCreateSocial;
