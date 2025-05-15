import "./App.css";

function Nav() {
  return (
    <div className="flex flex-row justify-between items-center h-20 w-full p-10 top-0 fixed">
      <div>
        <h1 className="text-3xl ml-20 py-10">Aditya Jain</h1>
      </div>
      <ul className="flex flex-row justify-between items-center h-full w-1/3  ">
        <a href="./index.html">
          <li className="bg-lime-300 text-black px-3 rounded">Home</li>
        </a>
        <a href="#">
          <li>Contacts</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>Projects</li>
        </a>
      </ul>
    </div>
  );
}

export default Nav;
