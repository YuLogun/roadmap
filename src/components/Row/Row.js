import React from "react";

//styles
import "./Row.scss";

const Row = ({ children }) => {
  return <div className="table">{children}</div>;
};

export default Row;
