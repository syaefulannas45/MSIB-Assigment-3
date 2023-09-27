import React from "react";
import { TextCS } from "../../atoms";

const List = ({ title, subTitle, desc, date }) => {
  return (
    <div className="flex justify-between mb-10">
      <div className="w-[85%]">
        <TextCS className="font-semibold text-xl">{title}</TextCS>
        <TextCS className="font-medium text-sm">{subTitle}</TextCS>
        <TextCS className="text-sm mt-5 w-[60%]">{desc}</TextCS>
      </div>
      <div className="w-[15%] flex justify-end pr-8">
        <TextCS className="text-red">{date}</TextCS>
      </div>
    </div>
  );
};

export default List;
