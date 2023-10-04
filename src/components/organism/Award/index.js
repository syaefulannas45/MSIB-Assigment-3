import React from "react";
import { Line, TextCS } from "../../atoms";
import ICAwards from "../../../assets/icon/award.svg";

const Awards = () => {
  const data = [
    { id: 1, title: "Data Management Staff (BNSP)" },
    { id: 2, title: "Fullstack React Native Developer" },
    { id: 2, title: "Fullstack Javascript MERN" },
  ];
  return (
    <div className="w-full pl-[300px] pt-[200px] animate-slide-in-left">
      <TextCS className="font-bold text-6xl my-10">Awards</TextCS>
      {data.map((award) => (
        <div className="flex items-center space-x-2" key={award.id}>
          <img src={ICAwards} alt="awards" className="w-[20px] h-[20px]" />
          <TextCS className="font-medium">{award.title}</TextCS>
        </div>
      ))}
      <Line className="mt-[300px]" />
    </div>
  );
};

export default Awards;
