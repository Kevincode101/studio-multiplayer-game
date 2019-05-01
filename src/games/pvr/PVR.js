import GameComponent from "../../GameComponent.js";
import React from "react";
import UserAPI from "../../UserApi.js";

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
      isRacoon: !isPirate,
      characters: [
        { x: 0, y: 0, type: "racoon" },
        { x: 0, y: 0, type: "racoon" }
      ]
    };
  }

  render() {
    if (this.state.isPirate) {
      return (
        <div>
          <h1>I am the pirate!!</h1>
          {this.state.characters.map(function(character) {
            return (
              <img src="http://www.icenews.is/wp-content/uploads/2018/03/raccoon-1905528_1920-700x487.jpg" />
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <h1>I am the racoon!!</h1>
        {this.state.characters.map(function(character) {
          console.log(character);
          return <p>{character.type}</p>;
        })}
      </div>
    );
  }
}
