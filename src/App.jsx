import "./App.css";
import Cards from '/Users/adityajain/my/my-Portfolio/src/componants/Cards.jsx';
import Nav from '/Users/adityajain/my/my-Portfolio/src/componants/Nav.jsx';
import Front from '/Users/adityajain/my/my-Portfolio/src/componants/Front.jsx';
import About from '/Users/adityajain/my/my-Portfolio/src/componants/About.jsx';
import Footer1 from '/Users/adityajain/my/my-Portfolio/src/componants/Footer.jsx'
import Skills from "/Users/adityajain/my/my-Portfolio/src/componants/Skills.jsx";


function App() {
  return (
    <>
      {/* navbar */}
      <Nav/>
      {/* front page */}
      <Front />
      {/* about  */}
      <About />

      {/* Skills */}
      <div className="w-full flex flex-col bg-amber-600 items-center h-fit py-20">
        <h1 className="text-black text-5xl p-6 rounded-2xl font-extrabold bg-amber-200 my-12">
          Skills
        </h1>
      <div className="flex flex-row justify-center items-center">

      <Skills />
      </div>
      </div>
      {/* projects  */}
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-5xl   p-5 px-10 rounded-xl my-2">Projects</h1>
        <p className="pb-2 px-10">Few of my projects that I built while learning.</p>

        <div className="w-full overflow-scroll h-fit flex flex-row p-10 ">
          <Cards />
        </div>
      </div>

      <Footer1 />
    </>
  );
}

export default App;
