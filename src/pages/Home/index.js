import React from "react";
import { AboutMe, Awards, Education, Experience, Interests, SideBar, Skills } from "../../components";

const Home = () => {
  return (
    <div className="flex space-x-5">
      <SideBar />
      <div className="w-full pl-[300px]">
        <AboutMe />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Awards />
      </div>
    </div>
  );
};

export default Home;
