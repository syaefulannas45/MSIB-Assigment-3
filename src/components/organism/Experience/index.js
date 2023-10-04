import React from "react";
import { Line, TextCS } from "../../atoms";
import { List } from "../../molecules";

const Experience = () => {
  const data = [
    {
      id: 1,
      title: "Android Developer Community",
      subTitle: "Mentor Divisi Frontend Development",
      date: "2022 - 2023",
      desc: " I am a mentor in an organization and teach Frontend Development to students in that organization. As a mentor, I have the responsibility to guide my students in learning Frontend Development in an effective and efficient",
    },
    {
      id: 2,
      title: "Workshop TechTalk & IoT Engineering",
      subTitle: "Mentor Divisi Frontend Development",
      date: "2023",
      desc: " I am a mentor in an organization and teach Frontend Development to students in that organization. As a mentor, I have the responsibility to guide my students in learning Frontend Development in an effective and efficient",
    },
    {
      id: 3,
      title: "PT CHAMP RESTO INDONESIA",
      subTitle: "Waiter",
      date: "2021 - 2022",
      desc: " ",
    },
  ];
  return (
    <div className="w-full pl-[300px] pt-[200px] animate-slide-in-left">
      <TextCS className="font-bold text-6xl my-10">Experience</TextCS>
      {data.map((item) => (
        <div key={item.id}>
          <List title={item.title} subTitle={item.subTitle} desc={item.desc} date={item.date} />
        </div>
      ))}
      <Line className="mt-36" />
    </div>
  );
};

export default Experience;
