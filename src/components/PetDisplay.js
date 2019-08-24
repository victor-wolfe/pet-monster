import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

const TEST_PET = {
  name: "Bob",
  species: "Dragon",
  src: "img/dragon.gif",
  alt: "DAGRON"
};

const petFrameStyle = {
  border: "5px solid black"
};

//will take the real stats as a prop later
// export const PetDisplay = () => {
//   return (
//     <div className="container">
//       <div className="col-12 col-sm-6" style={petFrameStyle}>
//         <img src={TEST_PET.src} alt={TEST_PET.alt} />
//         <h1>
//           {TEST_PET.name} the {TEST_PET.species}
//         </h1>
//       </div>
//     </div>
//   );
// };

export const PetDisplay = () => {
  return (
    <div className="col-12 col-sm-6" style={petFrameStyle}>
      <Card>
        <CardImg src={TEST_PET.src} alt={TEST_PET.alt} />
        <CardTitle>
          {TEST_PET.name} the {TEST_PET.species}
        </CardTitle>
      </Card>
    </div>
  );
};
