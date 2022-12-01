import React from "react";
import { useCollection } from "../../hooks/useCollection";
import DistillaryVote from "../../components/DistillaryVote";
import Header from "../../components/Header";

import "./results.css";

function Results() {
  const { documents } = useCollection("distilleries");

  return (
    <div>
      <Header />
      <table className="table-container table table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">Distillary</th>
            <th scope="col">Vote</th>
          </tr>
        </thead>
        {documents ? (
          documents
            .sort((a, b) => (a.vote < b.vote ? 1 : -1))
            .map((disillaryName) => (
              <tbody key={disillaryName.id} className="user-list-item">
                <DistillaryVote
                  key={disillaryName.id}
                  distillaryName={disillaryName.name}
                  vote={disillaryName.vote}
                />
              </tbody>
            ))
        ) : (
          <h2>Loading ...</h2>
        )}
      </table>
    </div>
  );
}

export default Results;
