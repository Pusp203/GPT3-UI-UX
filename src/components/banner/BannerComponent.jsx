import React from "react";
import "./bannerComponent.scss";
import signUp from "../../assets/signUp.png";

const BannerComponent = () => {
  return (
    <div className="Banner">
      <div className="Banner__component">
        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for traveling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
      </div>
      <div className="Banner__form">
        <input type="email" name="" id="" placeholder="Enter your email" />
        <button className="Banner__form-btn">Get Started</button>
      </div>
      <div className="Banner__signUp">
        <img src={signUp} alt="" />

        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
  );
};

export default BannerComponent;
