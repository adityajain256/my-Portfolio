import "./App.css";
import Cards from './Cards.jsx';
import Nav from './Nav.jsx';
import Front from './Front.jsx';
import About from './About.jsx';
import Footer1 from './Footer.jsx'


function App() {
  return (
    <>
      {/* navbar */}
      <Nav />
      {/* front page */}
      <Front />
      {/* about  */}
      <About />

      {/* projects  */}
      <div className="flex flex-col justify-center items-center bg-neutral-600">
        <h1 className="text-7xl font-bold py-5">Projects</h1>

        <div className="w-full h-dvh flex flex-row p-10">
          <Cards />
        </div>
      </div>

      <Footer1 />
    </>
  );
}

export default App;
