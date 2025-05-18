import '../App.css';
import image from '../assets/myPic.jpg'

function Front(){
    return(
        <div className="flex flex-row justify-between items-center h-dvh w-full bg-black p-10">
        <div className="flex flex-col justify-center items-center h-full w-1/2 ">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-7xl font-bold text-white">Aditya jain</h1>
            <p className="my-5">
              A frontend developer.Want to with someone in their project.
            </p>
            <button className="bg-lime-300 text-black p-1 rounded px-3">
              Start →
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full w-1/2">
          <div className="h-1/2 w-1/2 pl-2.5 p-2 bg-amber-50 ">
            <img
              className="h-full w-full"
            src={image}
              alt="img"
            ></img>
          </div>
        </div>
      </div>
    );
}

export default Front;