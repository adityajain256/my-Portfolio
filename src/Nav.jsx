import "./App.css";
import { useState } from "react";



function Nav() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="flex flex-row justify-between items-center h-20 w-full p-10 top-0 fixed">
      <div>
        <h1 className="text-3xl ml-20 py-10">Aditya Jain</h1>
      </div>
      <ul className="flex flex-row justify-between items-center h-full w-1/3  ">
        <a href="./index.html">
          <li className="bgChange" id="home">Home</li>
        </a>
        <span>
          <li onClick={changeBg} className="contact"> Contacts</li>
        </span>
        <span>
          <li onClick={()=>{
            document.querySelector('.about').classList.add("bgChange");
            document.querySelector('#home').classList.remove("bgChange");
            document.querySelector('.contact').classList.remove("bgChange");
            document.querySelector('.projects').classList.remove("bgChange");
            {window.scrollTo(0,830)}
          }} className="about">About</li>
        </span>
        <span>
          <li onClick={()=>{

            document.querySelector('.projects').classList.add("bgChange");
            document.querySelector('.about').classList.remove("bgChange");
            document.querySelector('#home').classList.remove("bgChange");
            document.querySelector('.contact').classList.remove("bgChange");
            { 
              window.scrollTo(0,1535)

            }
          }} className="projects">Projects</li>
        </span>
      </ul>
    </div>
  );

  function changeBg(){
    document.querySelector('.contact').classList.add("bgChange");
    document.querySelector('#home').classList.remove("bgChange");
    document.querySelector('.about').classList.remove("bgChange");
    document.querySelector('.projects').classList.remove("bgChange");
    setTimeout(() => {
      document.querySelector('#social').classList.add('hide');
      
    }, 1500);
    document.querySelector('#social').classList.remove('hide');
  }
}

export default Nav;
