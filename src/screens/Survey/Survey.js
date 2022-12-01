import React, { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import { useFirestore } from "../../hooks/useFirestore";
import DistillaryOptions from "../../components/DistillaryOptions/DistillaryOptions";

import "./survey.css";

function Survey() {
  const { documents } = useCollection("distilleries");
  const { updateDocument } = useFirestore("distilleries");
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedDistillary, setSelectedDistillary] = useState([]);
  const [errorLabel, setErrorLabel] = useState("");

  const onTrue = (id, vote) => {
    if (selectedCount < 10) {
      setSelectedDistillary([{ id: id, vote: vote }, ...selectedDistillary]);
      setSelectedCount(selectedCount + 1);
    } else {
      setErrorLabel("You can not vote for more than 10 locations");
    }
  };

  const handleSubmitSurvey = () => {
    if (selectedCount === 10) {
      selectedDistillary.map((option) =>
        updateDocument(option.id, { vote: Number(option.vote) + Number(1) })
      );
    } else {
      setErrorLabel("Please select 10 choices!");
    }
  };

  const onFalse = (id) => {
    const updated = selectedDistillary.filter((a) => a.id !== id);
    setSelectedDistillary(updated);
    setSelectedCount(selectedCount - 1);
  };

  return (
    <div className="list-items">
      {errorLabel && (
        <div className="alert alert-dismissible alert-danger">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            onClick={() => setErrorLabel("")}
          ></button>
          {errorLabel}
        </div>
      )}
      <h3 className="text-danger">
        Please Select 10 distillaries you would like to visit:
      </h3>
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
      <button className="btn btn-danger" onClick={() => handleSubmitSurvey()}>
        Submit
      </button>
    </div>
  );
}

export default Survey;
