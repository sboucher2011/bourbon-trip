import React, { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import DistillaryOptions from "../components/DistillaryOptions";

function Survey() {
  const { documents } = useCollection("distilleries");
  const [selectedCount, setSelectedCount] = useState(0);

  const onTrue = () => {
    if (selectedCount < 10) {
      console.log("add Value");
      setSelectedCount(selectedCount + 1);
    } else {
      alert("cannot add");
    }
  };

  const onFalse = () => {
    console.log("remove Value");
    setSelectedCount(selectedCount - 1);
  };

  return (
    <div>
      {documents ? (
        documents.map((disillaryName) => (
          <DistillaryOptions
            key={disillaryName.id}
            distillaryName={disillaryName.name}
            onTrue={() => onTrue()}
            onFalse={() => onFalse()}
          />
        ))
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  );
}

export default Survey;
