// import "./App.css";

// const details ={
//   PrName: ["Expanxe tracker",'Stop Watch'],
//   PrLink: ['https://adityajain256.github.io/Expance-tracker/','https://adityajain256.github.io/clock/' ],
//   prTec: ['HTML, CSS, JS', 'HTML, CSS, JS']
// };


// function Cards() {
//   return(
    
//     <>
    
//       <a href={details.PrLink[0]} target="_blank">
//         <div
//           className="flex flex-col rounded-xl  p-4 w-3xs  bg-black"
//           style={{
//             border: "0.88px solid",
//             backdropFilter: "saturate(180%) blur(14px)",
//             background: "black",
//           }}
//         >
//           <div>
//             <img
//               src="https://imageio.forbes.com/specials-images/imageserve/67874a28f017c80ed324338f/White-card-with-the-text-Keep-track-of-your-expenses-on-wooden-desk-background-/960x0.jpg?format=jpg&width=1440"
//               alt="nft-gif"
//               width="400"
//               height="400"
//               className="rounded-xl"
//             />
//           </div>
//           <div className="flex flex-col  rounded-b-xl  ">
//             <div className="flex flex-col justify-center">
              
//             <h1 className="font-RubikBold text-xl mt-4">{details.PrName[0]}</h1>
//             <h1 className="font-RubikBold ml-28 mt-10">{details.prTec[0]}</h1>
//             </div>
//             <div className="flex  justify-between font-mono">
//             </div>
           
//           </div>
//         </div>
//         </a>
    
//       </>
//     );
  
// }


// export default Cards;

import "./App.css";
import stopimg from '/Users/adityajain/my/Clone/src/assets/stopwatch.png'
import expense from '/Users/adityajain/my/Clone/src/assets/960x0.webp'

const details = {
  PrName: ["Expanxe tracker", "Stop Watch"],
  PrLink: [
    "https://adityajain256.github.io/Expance-tracker/",
    "https://adityajain256.github.io/clock/",
  ],
  prTec: ["HTML, CSS, JS", "HTML, CSS, JS"],
  image: [expense,stopimg]
};

function Cards() {
  return (
    <>
      {details.PrName.map((name, index) => (
        <a href={details.PrLink[index]} target="_blank" key={index}>
          <h1 className="text-2xl">{index+1}</h1>
          <div
            className="flex flex-col rounded-xl p-4 m-5 w-3xs bg-black"
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
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col rounded-b-xl">
              <div className="flex flex-col justify-center">
                <h1 className="font-RubikBold text-xl mt-4">{name}</h1>
                <h1 className="font-RubikBold ml-28 mt-10">
                  {details.prTec[index]}
                </h1>
              </div>
              <div className="flex justify-between font-mono"></div>
            </div>
          </div>
        </a>
      ))}
    </>
  );
}

export default Cards;