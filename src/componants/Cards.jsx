

import "/Users/adityajain/my/my-Portfolio/src/App.css";
import stopimg from '/Users/adityajain/my/Clone/src/assets/stopwatch.png'
import expense from '/Users/adityajain/my/Clone/src/assets/960x0.webp'
import task from '/Users/adityajain/my/my-Portfolio/src/assets/taskManager.png'

const details = {
  PrName: ["Task-manager","Expanxe tracker", "Stop Watch",],
  PrLink: [
    "https://task-management-adityajain256.netlify.app/",
    "https://adityajain256.github.io/Expance-tracker/",
    "https://adityajain256.github.io/clock/",
  ],
  prTec: ["React.js, TailwindCss","HTML, CSS, JS", "HTML, CSS, JS", ],
  image: [task,expense,stopimg,]
};

function Cards() {
  return (
    <div className="flex flex-row">
      {details.PrName.map((name, index) => (
        <a href={details.PrLink[index]} target="_blank" key={index}>
          <h1 className="text-2xl">{index+1}</h1>
          <div
            className="flex flex-col justify-center items-center rounded-xl p-4 m-5 w-xl h-fit bg-black"
            style={{
              border: "0.88px solid",
              backdropFilter: "saturate(180%) blur(14px)",
              background: "black",
            }}
          >
            <div>
              <img
                src={details.image[index]}
                alt="nft-gif"
                width="400"
                height="400"
                className="rounded-xl my-7"
              />
            </div>
            <div className="flex flex-col rounded-b-xl">
              <div className="flex flex-col justify-center">
                <h1 className="font-RubikBold text-5xl my-8">{name}</h1>
                <h1 className="font-RubikBold text-2xl my-5">
                  {details.prTec[index]}
                </h1>
              </div>
              <div className="flex justify-between font-mono"></div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Cards;