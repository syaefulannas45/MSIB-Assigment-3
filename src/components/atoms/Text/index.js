import React from "react";

const TextCS = ({ className, ...desc }) => {
  return <p className={className} {...desc} />;
};

export default TextCS;
