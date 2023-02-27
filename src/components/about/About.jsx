import React from "react";
import { Link } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import { programs } from "../../Data";
import Card from "./Card";
import SectionHeader from "./SectionHeader";
// import { AiFillCareRight } from "react-icons/ai";

const About = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHeader
          className="programs__container"
          icon={<FaCrown />}
          title="Programs"
        />
      </div>
      <div className="programs__wrapper">
        {programs.map(({ id, icon, title, info, path }) => {
          return (
            <Card className="programs__program" key={id}>
              <span>{icon}</span>
              <h4>{title}</h4>
              <small>{info}</small>
              {/* <Link to={path} className="btn sm">
                Learn MOre <AiFillCareRight />
              </Link> */}
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default About;
