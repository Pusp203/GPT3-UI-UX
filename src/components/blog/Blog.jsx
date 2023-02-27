import React from "react";
import "./blog.scss";
import BlogComponent from "./BlogComponent";
import { programs } from "../../Data";
import mainblog from "../../assets/mainblog.png";

const Blog = () => {
  return (
    <div className="blog blog-container">
      <h1>A lot is happening, We are blogging about it.</h1>
      <div className="main">
        <div className="main__contents">
          <div className="imgages">
            <img src={mainblog} alt="" />
          </div>
          <div className="main__contents-text">
            <div>
              <span>Sep 26,2021</span>
              <h1>GPT-3 and Open AI is the future. Let us exlore how it is?</h1>
            </div>
            <div>
              <p>Read Full Article</p>
            </div>
          </div>
        </div>
        <div className="main__blogs">
          {programs.map((value) => {
            console.log("value", value);
            return (
              <div className="main__blogs-section">
                <div className="main__blogs-section__image">
                  <img src={value.image} alt="" />
                </div>
                <div className="main__blogs-section__content">
                  <BlogComponent key={value.id}>
                    <span className="extra">{value.date}</span>
                    <h1>{value.title}</h1>
                    <p>{value.value}</p>
                  </BlogComponent>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
