import React from "react";
import { Line, TextCS } from "../../atoms";
import { Sosmed } from "../../molecules";

const AboutMe = () => {
  return (
    <div id="about" className="pt-[200px]">
      <div className="flex space-x-1 font-bold text-6xl ">
        <TextCS className="text-black">Syaeful</TextCS>
        <TextCS className="text-orange">Annas</TextCS>
      </div>
      <TextCS className="mt-5 text-sm">syaefulannas33@gmail.com</TextCS>
      <TextCS className="max-w-[800px] mt-5 text-black">
        I am a Frontend developer who is studying Backend development. As a frontend developer, I have the ability to design and develop attractive and functional user interfaces, using programming languages ​​such as HTML, CSS and
        JavaScript, and frequently using various frameworks such as React JS & React Native. Currently, I am also exploring the field of Backend Development, which involves the development of server side and database on a website. In
        this field, you learn to use the JavaScript programming language, and work with frameworks such as Node.js and Express
      </TextCS>
      <Sosmed />
      <Line className="mt-40" />
    </div>
  );
};

export default AboutMe;
