import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import "./faq.scss";

const FAQs = ({ question, answer }) => {
  const [answerShowing, setAnswerShowing] = useState(false);
  // const handlePlus = () => {
  //   setAnswerShowing((prev) => !prev);
  // };
  return (
    <div>
      <div className="faq" onClick={() => setAnswerShowing((prev) => !prev)}>
        <div>
          <h4>{question}</h4>
          <button>
            {" "}
            {answerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {answerShowing && <p>{answer}</p>}
        {/* if answeshowing is true,then only right part of && operator is rendered */}
      </div>
    </div>
  );
};

export default FAQs;
