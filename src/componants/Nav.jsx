import "../App.css";
import { useState } from "react";





function Nav() {
  return (
    <div className="flex flex-row justify-between items-center h-20 w-full p-10 top-0 fixed bg-black">
      <div>
        <h1 className="text-3xl ml-20 py-10">Aditya Jain</h1>
      </div>
      <ul className="flex flex-row justify-between items-center h-full w-1/3  ">
        <span>
          <li className="bgChange" id="home" onClick={()=>{ 
            document.querySelector('.skills').classList.remove("bgChange");
            document.querySelector('.about').classList.remove("bgChange");
            document.querySelector('#home').classList.add("bgChange");
            document.querySelector('.contact').classList.remove("bgChange");
            document.querySelector('.projects').classList.remove("bgChange");
            
            {window.scrollTo({top:0, behavior:"smooth"})}}}>Home</li>
        </span>
        <span>
          <li onClick={changeBg} className="contact"> Contacts</li>
          <div className='flex justify-center items-center bg-amber-500 w-fit h-fit p-3 absolute top-15 right-10 rounded hide' id='social'>
           <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
              <li>
                <a target='_blank' href="https://github.com/adityajain256">GitHub</a>
              </li>
              <li>
                <a target='_blank' href="https://www.linkedin.com/in/aditya-jain-0a948b31b/">Linkedin</a>
              </li>
              <li>
                <a target='_blank' href="https://www.instagram.com/adityajain256/">Instagram</a>
              </li>
            </ul>
    
        </div>
        </span>
        <span>
          <li onClick={()=>{
            document.querySelector('.skills').classList.remove("bgChange");
            document.querySelector('.about').classList.add("bgChange");
            document.querySelector('#home').classList.remove("bgChange");
            document.querySelector('.contact').classList.remove("bgChange");
            document.querySelector('.projects').classList.remove("bgChange");
            {window.scrollTo({top:830, behavior:"smooth"})}
          }} className="about">About</li>
        </span>
        <span>
          <li onClick={()=>{

            document.querySelector('.projects').classList.remove("bgChange");
            document.querySelector('.skills').classList.add("bgChange");
            
            document.querySelector('.about').classList.remove("bgChange");
            document.querySelector('#home').classList.remove("bgChange");
            document.querySelector('.contact').classList.remove("bgChange");
            { 
              window.scrollTo({top:1580, behavior:"smooth"})

            }
          }} className="skills">Skills</li>
        </span>
        <span>
          <li onClick={()=>{
            document.querySelector('.skills').classList.remove("bgChange");
            document.querySelector('.projects').classList.add("bgChange");
            document.querySelector('.about').classList.remove("bgChange");
            document.querySelector('#home').classList.remove("bgChange");
            document.querySelector('.contact').classList.remove("bgChange");
            { 
              window.scrollTo({top:2380, behavior:"smooth"})

            }
          }} className="projects">Projects</li>
        </span>
        
      </ul>
    </div>
  );

  function changeBg(){
    document.querySelector('.skills').classList.remove("bgChange");
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
