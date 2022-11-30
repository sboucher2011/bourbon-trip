import React, { useState } from "react";

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
    <div>
      <label>
        {distillaryName}
        <input type="checkbox" onChange={handleChange} />
      </label>
    </div>
  );
}

export default DistillaryOptions;
