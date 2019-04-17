import GameComponent from "../../GameComponent.js";
import React from "react";
import UserAPI from "../../UserApi.js";

export default class Pvr extends GameComponent {
  constructor(props) {
    super(props);
    // any other logic here...
    // this.state = {"Is Priate"};
    const myId = this.getMyUserId();
    const creator = this.getSessionCreatorUserId();
    const isPirate = myId === creator;
    this.state = {
      isPirate: isPirate,
      isRacoon: "isRacoon"
    };
  }

  render() {
    if (this.state.isPirate) {
      return <h1>I am the pirate!!</h1>;
    }
    return <h1>I am the racoon!!</h1>;
    var id = this.getSessionId();
    var users = this.getSessionUserIds().map(user_id => (
      <li key={user_id}>{user_id}</li>
    ));
    var creator = UserAPI.getName(this.getSessionCreatorUserId());
    return (
      <div>
        <p>Session ID: {id}</p>
        <p>Session creator: {creator}</p>

        <p>Session users:</p>
        <p>{this.getMyUserId()}</p>

        <ul> {users} </ul>
      </div>
    );
  }
}
