import React from "react";
import { Link } from "react-router-dom";


const LinkCS = ({ desc, to, className, onClick }) => {
  return (
    <Link to={to} className={className} onClick={onClick}>
      {desc}
    </Link>
  );
};

export default LinkCS;
