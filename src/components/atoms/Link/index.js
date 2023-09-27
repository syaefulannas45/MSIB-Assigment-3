import React from "react";


const LinkCS = ({ desc, to, className, onClick }) => {
  return (
    <a href={to} className={className} onClick={onClick}>
      {desc}
    </a>
  );
};

export default LinkCS;
