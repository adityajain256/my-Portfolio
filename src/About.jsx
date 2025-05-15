import './App.css'

function About(){
    return(
         <div className="flex flex-col w-full h-dhv">
        <div className="flex flex-row justify-center items-center w-full ">
          <h1 className="text-5xl mt-10 font-bold py-10">About</h1>
        </div>

        <div className="flex flex-row justify-between items-center w-full h-80vh ">
          <div className="flex flex-col justify-center items-center w-2/3  px-20">
            <h4 className="text-2xl">
              Hi, I’m Aditya Jain, a passionate and dedicated web developer with
              a strong foundation in HTML, CSS, JavaScript, and React. I enjoy
              turning ideas into interactive and user-friendly digital
              experiences. With a focus on clean code, responsive design, and
              continuous learning, I aim to build impactful web applications
              that solve real-world problems. Currently pursuing my BTech in CSE
              with a specialization in AI/ML, I’m always exploring new
              technologies and improving my skills. Whether it's front-end
              development or full-stack projects, I'm excited to collaborate,
              learn, and grow in the tech world. Let’s build something amazing
              together!
            </h4>
            <button className="border-2 bg-red-500 px-2 py-1 mt-10 rounded ">
              More
            </button>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-9xl"
            >
              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
            </svg>
          </div>
        </div>
      </div>
    );
}

export default About;