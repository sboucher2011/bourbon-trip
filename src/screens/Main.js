import React from "react";
import { useNavigate } from "react-router";

function Main() {
  const navigate = useNavigate();
  const handleSurvey = () => {
    navigate("/Survey");
  };

  return (
    <div>
      <button onClick={() => handleSurvey()}>Tour Survey 🥃</button>
      <button onClick={() => console.log("survey clicked")}>
        Survey Results✅
      </button>
    </div>
  );
}

export default Main;
