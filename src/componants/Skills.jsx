import React from "react";
import "../App.css";
import iconHtml from "../assets/html5.svg";
import iconCss from "../assets/css.svg";
import iconJs from "../assets/javascript.svg";
import iconReact from "../assets/react.svg";

const Skills = () => {
  const skil = {
    sName: ["HTML5", "CSS", "JavaScript", "REACT"],
    icon: [iconHtml, iconCss, iconJs, iconReact],
  };
  return (
    <>
      
      {skil.sName.map((sname, index) => (
       <div className="w-60 flex flex-col rounded-xl bg-amber-50 min-h-[19rem] p-10 m-10">
        <div>
          <img
            src={skil.icon[index]}
            alt="test"
            className="object-cover object-center rounded-t-xl py-5"
          />
        </div>
        <div className="flex flex-col px-3 ">
          <div className="flex justify-between ">
            <h1 className="font-bold text-black">{sname}</h1>
          
          </div>
        </div>
      </div>
        
      ))}
    </>
  );
};

export default Skills;
