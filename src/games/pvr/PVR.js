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
      Pscore: 0,
      Rscore: 0,
      characters: [
        { x: "20px", y: "200px", type: "pirate", visible: true },
        { x: "100px", y: "20px", type: "pirate", visible: true },
        { x: "300px", y: "200px", type: "pirate", visible: true },
        { x: "400px", y: "50px", type: "raccoon", visible: true },
        { x: "600px", y: "100px", type: "raccoon", visible: true },
        { x: "80px", y: "110px", type: "raccoon", visible: true }
      ]
    };
  }

  handleImageClick(i) {
    console.log(this.state.characters);
    if (this.state.characters[i].type === "raccoon" && this.state.isPirate) {
      this.setState({ Pscore: this.state.Pscore + 1 });
      let newCharacters = this.state.characters;
      newCharacters[i].visible = false;
      this.setState({ characters: newCharacters });
      console.log("You clicked the dang raccoon yearg matii!!!!");
    } else if (
      this.state.characters[i].type === "pirate" &&
      this.state.isRaccoon
    ) {
      this.setState({ Rscore: this.state.Rscore + 1 });
      let newCharacters = this.state.characters;
      newCharacters[i].visible = false;
      this.setState({ characters: newCharacters });
      console.log("The raccoon race has elimanted another HUMAN!!!!!!!");
    }
  }

  render() {
    var name;
    if (this.state.isPirate === true) {
      name = "pirate";
    } else if (this.state.isRaccoon === true) {
      name = "raccoon";
    }

    var characters = this.state.characters.map((character, i) => {
      if (character.type === "pirate" && character.visible === true) {
        return (
          <img
            onClick={() => this.handleImageClick(i)}
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
      } else if (character.type === "raccoon" && character.visible === true) {
        return (
          <img
            onClick={() => this.handleImageClick(i)}
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
      } else {
        return null;
      }
    });

    return (
      <div>
        <h1>I am the {name}!!</h1>
        <p>PScore: {this.state.Pscore}</p>
        <p>RScore: {this.state.Rscore}</p>
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
