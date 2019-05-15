import GameComponent from "../../GameComponent.js";
import React from "react";
import UserAPI from "../../UserApi.js";
import styles from "./PVR.css";
export default class PrR extends GameComponent {
  constructor(props) {
    super(props);
    // any other logic here...
    // this.state = {"Is Priate"};
    const myId = this.getMyUserId();
    const creator = this.getSessionCreatorUserId();
    const isPirate = myId === creator;
    this.state = {
      isPirate: isPirate,
      isRaccoon: !isPirate,
      characters: [
        { x: "20px", y: "100px", type: "pirate" },
        { x: "100px", y: "20px", type: "pirate" },
        { x: "300px", y: "200px", type: "pirate" },
        { x: "400px", y: "50px", type: "raccoon" },
        { x: "600px", y: "100px", type: "raccoon" },
        { x: "80px", y: "110px", type: "raccoon" }
      ]
    };
  }
  handleImageClick(i) {
    alert("BANG!!");
  }
  render() {
    var name;
    if (this.state.isPirate === true) {
      name = "pirate";
    } else if (this.state.isRaccoon === true) {
      name = "raccoon";
    }

    var characters = this.state.characters.map(character => {
      if (character.type === "pirate") {
        return (
          <img
            onClick={() => this.handleImageClick()}
            alt="character"
            src="https://hardybm.files.wordpress.com/2010/08/mean-pirate.png"
            style={{
              position: "absolute",
              height: "100px",
              width: "100px",
              "border-radius": "50px",
              left: character.x,
              top: character.y
            }}
          />
        );
      } else if (character.type === "raccoon") {
        return (
          <img
            onClick={() => this.handleImageClick()}
            alt="character"
            src="http://www.icenews.is/wp-content/uploads/2018/03/raccoon-1905528_1920-700x487.jpg"
            style={{
              position: "absolute",
              height: "100px",
              width: "100px",
              "border-radius": "50px",
              left: character.x,
              top: character.y
            }}
          />
        );
      }
    });

    return (
      <div>
        <h1>I am the {name}!!</h1>
        <div>{characters}</div>
      </div>
    );
  }
}

// {this.state.characters.map(function(character, i) {
//             return (
//               <img
//                 onClick={() => this.handleImageClick(i)}
//                 style={{
//                   position: "absolute",
//                   height: "100px",
//                   width: "100px",
//                   "border-radius": "50px",
//                   left: character.x,
//                   top: character.y
//                 }}
//                 src="http://www.icenews.is/wp-content/uploads/2018/03/raccoon-1905528_1920-700x487.jpg"
//               />
//             );
//           })}
