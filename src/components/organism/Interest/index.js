import React from "react";
import { Line, TextCS } from "../../atoms";

const Interests = () => {
  return (
    <div className="w-full pl-[300px] pt-[200px] animate-slide-in-left">
      <TextCS className="font-bold text-6xl my-10">Interests</TextCS>
      <TextCS className="w-[70%]">
        I have a profound interest in the world of web programming, specifically in the development of web and mobile applications. The ability to create dynamic and functional online experiences, both through web browsers and mobile
        devices, is something I have always found incredibly captivating. Throughout my journey in web programming, I have pursued a broad knowledge of programming languages such as HTML, CSS, and JavaScript.
      </TextCS>
      <br />
      <TextCS className="w-[70%]">
        What I find most amazing about web programming is the ability to design and build responsive websites, meaning they can smoothly adapt to various screen sizes and devices. Additionally, I am deeply interested in user interface
        (UI) and user experience (UX) design, which allows me to create visually appealing layouts and intuitive user experiences.
      </TextCS>

      <br />
      <TextCS className="w-[70%]">
        I also have a keen interest in developing mobile applications, both for Android platforms. This opens up significant opportunities to create apps that can be accessed anytime, anywhere, which is a crucial aspect in today's
        digital world.
      </TextCS>
      <Line className="mt-[230px]" />
    </div>
  );
};

export default Interests;
