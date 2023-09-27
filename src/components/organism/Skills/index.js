import React from "react";
import { Line, TextCS } from "../../atoms";
import ICCheckList from "../../../assets/icon/checklist.svg";

const Skills = () => {
  const firstData = [
    { id: 1, title: "Javascript" },
    { id: 2, title: "Typescript" },
    { id: 3, title: "NodeJS" },
    { id: 4, title: "MongoDB" },
    { id: 5, title: "PHP" },
  ];
  const secondData = [
    { id: 1, title: "React JS" },
    { id: 2, title: "Next JS" },
    { id: 3, title: "React Native" },
    { id: 4, title: "Express JS" },
    { id: 5, title: "Tailwind CSS" },
  ];
  return (
    <div id="skills">
      <TextCS className="font-bold text-6xl my-10">Skills</TextCS>
      <TextCS className="font-semibold">Programing Language, Database & Frameworks</TextCS>
      <div className="flex space-x-5">
        <div>
          {firstData.map((item) => (
            <div className="flex items-center space-x-2 mt-5" key={item.id}>
              <div className="bg-green-500 w-[20px] h-[20px] rounded-full flex justify-center items-center">
                <img src={ICCheckList} alt="checklist" className="w-[10px] h-[10px]" />
              </div>
              <TextCS>{item.title}</TextCS>
            </div>
          ))}
        </div>
        <div>
          {secondData.map((item) => (
            <div className="flex items-center space-x-2 mt-5" key={item.id}>
              <div className="bg-green-500 w-[20px] h-[20px] rounded-full flex justify-center items-center">
                <img src={ICCheckList} alt="checklist" className="w-[10px] h-[10px]" />
              </div>
              <TextCS>{item.title}</TextCS>
            </div>
          ))}
        </div>
      </div>
      <Line className="mt-[330px]" />
    </div>
  );
};

export default Skills;
