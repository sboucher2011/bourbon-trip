import React, { useState } from "react";

import "./options.css";

function DistillaryOptions({ distillaryName, onTrue, onFalse }) {
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    if (toggle === false) {
      setToggle(true);
      onTrue();
    } else {
      setToggle(false);
      onFalse();
    }
  };
  return (
    <div className="list-item">
      <label className="label">
        {distillaryName}
        <input className="checkbox" type="checkbox" onChange={handleChange} />
      </label>
    </div>
  );
}

export default DistillaryOptions;
