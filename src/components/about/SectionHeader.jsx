import React from "react";

const SectionHeader = ({ icon, title, className }) => {
  return (
    <div className={`section_head ${className}`}>
      {/* <div> */}
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;
