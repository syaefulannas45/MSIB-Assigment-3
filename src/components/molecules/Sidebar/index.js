import React, { useEffect, useState } from "react";
import DUMe from "../../../assets/dummy/me.jpeg";
import { LinkCS } from "../../atoms";

const SideBar = () => {
  const [activeId, setActiveId] = useState(null);
  const handleScroll = () => {
    const sectionIds = ["about", "experience", "education", "skills", "interests", "awards"];

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 0) {
          setActiveId(id);
          break;
        }
      }
    }
  };
  const handleClick = (id) => {
    setActiveId(id);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[250px] bg-brown h-screen flex-col justify-center flex items-center fixed">
      <div className="w-[150px] h-[150px] bg-cream rounded-full justify-center items-center flex">
        <img src={DUMe} alt="me" className="w-[140px] h-[140px] rounded-full" />
      </div>
      <div className="flex-col flex text-center mt-5 space-y-3 font-semibold text-cream">
        <LinkCS desc={"ABOUT"} to={"#about"} onClick={() => handleClick("about")} className={`${activeId === "about" && "text-orange"}`} />
        <LinkCS desc={"EXPERIENCE"} to={"#experience"} onClick={() => handleClick("experience")} className={`${activeId === "experience" && "text-orange"}`} />
        <LinkCS desc={"EDUCATION"} to={"#education"} onClick={() => handleClick("education")} className={`${activeId === "education" && "text-orange"}`} />
        <LinkCS desc={"SKILLS"} to={"#skills"} onClick={() => handleClick("skills")} className={`${activeId === "skills" && "text-orange"}`} />
        <LinkCS desc={"INTERESTS"} to={"#interests"} onClick={() => handleClick("interests")} className={`${activeId === "interests" && "text-orange"}`} />
        <LinkCS desc={"AWARDS"} to={"#awards"} onClick={() => handleClick("awards")} className={`${activeId === "awards" && "text-orange"}`} />
      </div>
    </div>
  );
};

export default SideBar;
