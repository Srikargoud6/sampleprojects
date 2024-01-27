import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Questions.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

const Question = ({ question, ans }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="question">
      <div className="d-flex justify-content-between">
        <div>
          <h5>{question}</h5>
        </div>
        <div>
          {expand ? (
            <FaMinus className="icon" onClick={() => setExpand(!expand)} />
          ) : (
            <FaPlus className="icon" onClick={() => setExpand(!expand)} />
          )}
        </div>
      </div>
      {expand && <p>{ans}</p>}
    </div>
  );
};

export default Question;
