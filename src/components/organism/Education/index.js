import React from "react";
import { Line, TextCS } from "../../atoms";
import { List } from "../../molecules";

const Education = () => {
  const data = [
    {
      id: 1,
      title: "MA ASH-SHIDDIQIYAH",
      subTitle: "IPA",
      date: "2018 - 2021",
      desc: "",
    },
    {
      id: 2,
      title: "STMIK IKMI CIREBON",
      subTitle: "Teknik Informatika",
      date: "2023",
      desc: "",
    },
  ];
  return (
    <div className="w-full pl-[300px] pt-[200px] animate-slide-in-left">
      <TextCS className="font-bold text-6xl my-10">Education</TextCS>
      {data.map((item) => (
        <div key={item.id}>
          <List title={item.title} subTitle={item.subTitle} desc={item.desc} date={item.date} />
        </div>
      ))}
      <Line className="mt-[300px]" />
    </div>
  );
};

export default Education;
