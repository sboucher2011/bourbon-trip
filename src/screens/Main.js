import React from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";

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
      <Header />
      <button className="btn btn-info" onClick={() => handleSurvey()}>
        Tour Survey 🥃
      </button>
      <button class="btn btn-success" onClick={() => handleResults()}>
        Survey Results✅
      </button>
    </div>
  );
}

export default Main;
