import React from "react";
import FAQs from "./FAQs";
import { faqs } from "../../Data";
import "./faq.scss";

const FAQ = () => {
  return (
    <div className="faqs__main">
      <div className="container">
        {faqs.map(({ id, question, answer }) => {
          //   console.log("first", value);
          return <FAQs key={id} question={question} answer={answer} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
