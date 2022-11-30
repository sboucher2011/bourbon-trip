import React from "react";
import { useCollection } from "../hooks/useCollection";
import DistillaryVote from "../components/DistillaryVote";

function Results() {
  const { documents } = useCollection("distilleries");

  return (
    <div>
      {documents ? (
        documents
          .sort((a, b) => (a.vote < b.vote ? 1 : -1))
          .map((disillaryName) => (
            <DistillaryVote
              key={disillaryName.id}
              distillaryName={disillaryName.name}
              vote={disillaryName.vote}
            />
          ))
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  );
}

export default Results;
