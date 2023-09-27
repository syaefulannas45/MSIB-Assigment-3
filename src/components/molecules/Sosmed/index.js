import React from "react";
import ICGithub from "../../../assets/icon/github.svg";
import ICLinked from "../../../assets/icon/linked.svg";

import { LinkCS } from "../../atoms";
const Sosmed = () => {
  return (
    <div className="flex space-x-3 mt-3">
      <LinkCS
        to={"https://github.com/syaefulannas45"}
        desc={
          <div className="bg-black w-[40px] h-[40px] rounded-full justify-center items-center flex">
            <img src={ICGithub} alt="github" className="w-[30px] h-[30px] rounded-full" />
          </div>
        }
      />
      <LinkCS
        to={"https://www.linkedin.com/in/syaeful-annas/"}
        desc={
          <div className="bg-blue-700 w-[40px] h-[40px] rounded-full justify-center items-center flex">
            <img src={ICLinked} alt="github" className="w-[30px] h-[30px] rounded-full" />
          </div>
        }
      />
    </div>
  );
};

export default Sosmed;
