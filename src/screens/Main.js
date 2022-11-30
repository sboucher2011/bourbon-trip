import React from "react";
import { useNavigate } from "react-router";

function Main() {
  const navigate = useNavigate();
  const handleSurvey = () => {
    navigate("/Survey");
  };

  const handleResults = () => {
    navigate("/Results");
  };

  return (
    <div>
      <button onClick={() => handleSurvey()}>Tour Survey 🥃</button>
      <button onClick={() => handleResults()}>Survey Results✅</button>
    </div>
  );
}

export default Main;
