// import { useState } from "react";

// const Card = (props) => {
//   const [isClicked, setIsClicked] = useState(false);
//   const clicked = () => {
//     setIsClicked((prevItem) => !prevItem);
//   };
//   const popHandler = () => {
//     alert(props.items.department);
//   };
//   return (
//     <>
//       {isClicked && (
//         <div className="card">
//           <h2 onClick={popHandler} className="name">
//             Name: {props.items.name}
//           </h2>
//           <p>Department:{props.items.department}</p>
//           <p>Designation:{props.items.designation}</p>
//           <button onClick={clicked}>Close</button>
//         </div>
//       )}
//     </>
//   );
// };
// export default Card;
