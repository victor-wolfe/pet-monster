import React, { useState } from "react";
import { Input, Button } from "reactstrap";
import reactCSS from "reactcss";
import { GithubPicker } from "react-color";
import { Egg } from "./SVG";
import { useStoreActions, useStoreState } from "easy-peasy";

// class StartScreen extends React.Component {
//   state = {
//     displayColorPicker: false,
//     color: {
//       r: "241",
//       g: "112",
//       b: "19",
//       a: "1"
//     },
//     hexColor: "#F17013"
//   };

//   handleClick = () => {
//     this.setState({ displayColorPicker: !this.state.displayColorPicker });
//   };

//   handleClose = () => {
//     this.setState({ displayColorPicker: false });
//   };

//   handleChange = color => {
//     this.setState({ color: color.rgb, hexColor: color.hex });
//   };

//   render() {
//     const styles = reactCSS({
//       default: {
//         color: {
//           width: "50px",
//           height: "50px",
//           borderRadius: "2px",
//           background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`
//         },
//         swatch: {
//           padding: "5px",
//           background: "#fff",
//           borderRadius: "1px",
//           boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
//           display: "inline-block",
//           cursor: "pointer"
//         },
//         popover: {
//           position: "absolute",
//           zIndex: "2"
//         },
//         cover: {
//           position: "fixed",
//           top: "0px",
//           right: "0px",
//           bottom: "0px",
//           left: "0px"
//         }
//       }
//     });

//     return (
//       <div className="nes-container is-centered is-dark">
//         <Egg color={this.state.hexColor} />
//         <div style={styles.swatch} onClick={this.handleClick}>
//           <div style={styles.color} />
//         </div>
//         {this.state.displayColorPicker ? (
//           <div style={styles.popover}>
//             <div style={styles.cover} onClick={this.handleClose} />
//             <GithubPicker
//               color={this.state.color}
//               onChange={this.handleChange}
//             />
//           </div>
//         ) : null}
//         <div>
//           <Input placeholder="I'll name it..." />
//           <Button>ENTER</Button>
//         </div>
//         <div className="nes-container is-centered is-dark">
//           When the egg is to your liking, press Enter.
//         </div>
//       </div>
//     );
//   }
// }

const StartScreen = () => {
  const [displayColorPicker, setDisplay] = useState(false);

  const handleClick = () => setDisplay(!displayColorPicker);

  const handleClose = () => setDisplay(false);

  const handleChange = useStoreActions(actions => actions.color.handleChange);

  const color = useStoreState(state => state.color.color);

  const hexColor = useStoreState(state => state.color.hexColor);
  const styles = reactCSS({
    default: {
      color: {
        width: "50px",
        height: "50px",
        borderRadius: "2px",
        background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer"
      },
      popover: {
        position: "absolute",
        zIndex: "2"
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }
  });

  return (
    <div className="nes-container is-centered is-dark">
      <Egg color={hexColor} />
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <GithubPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
      <div>
        <Input placeholder="I'll name it..." />
        <Button>ENTER</Button>
      </div>
      <div className="nes-container is-centered is-dark">
        When the egg is to your liking, press Enter.
      </div>
    </div>
  );
};

export default StartScreen;