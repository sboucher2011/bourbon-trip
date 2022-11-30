import React, { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { useFirestore } from "../hooks/useFirestore";
import DistillaryOptions from "../components/DistillaryOptions";

function Survey() {
  const { documents } = useCollection("distilleries");
  const { updateDocument } = useFirestore("distilleries");
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedDistillary, setSelectedDistillary] = useState([]);

  const onTrue = (id, vote) => {
    console.log(vote);
    if (selectedCount < 10) {
      setSelectedDistillary([{ id: id, vote: vote }, ...selectedDistillary]);
      setSelectedCount(selectedCount + 1);
    } else {
      alert("cannot add anymore");
    }
  };

  const handleSubmitSurvey = () => {
    if (selectedCount === 10) {
      selectedDistillary.map((option) =>
        updateDocument(option.id, { vote: Number(option.vote) + Number(1) })
      );
    } else {
      alert("please select 10 choices");
    }
  };

  const onFalse = (id) => {
    const updated = selectedDistillary.filter((a) => a.id !== id);
    setSelectedDistillary(updated);
    setSelectedCount(selectedCount - 1);
  };

  return (
    <div>
      {documents ? (
        documents.map((disillaryName) => (
          <DistillaryOptions
            key={disillaryName.id}
            distillaryName={disillaryName.name}
            onTrue={() =>
              onTrue(
                disillaryName.id,
                disillaryName.vote !== undefined ? disillaryName.vote : 0
              )
            }
            onFalse={() => onFalse(disillaryName.id)}
          />
        ))
      ) : (
        <h2>Loading ...</h2>
      )}
      <button onClick={() => handleSubmitSurvey()}>Submit</button>
    </div>
  );
}

export default Survey;
