import React from "react";

const filter = (props) => {
  return (
    <div
      className="filter"
      style={{ width: `${props.percentage}%`, background: `${props.color}` }}
    ></div>
  );
};

export default filter;
