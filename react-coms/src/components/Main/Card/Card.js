import React, { Component } from "react";
import { userContext } from "../../../context/userContext";

class Card extends Component {

  static contextType = userContext;

  constructor(props) {
    super(props)

    const {user} = this.context
    this.state = {
      user
    }
    console.log(user)
  }

  render() {
    return <div>
      <p>Name:</p>
    </div>;
  }
}

export default Card;
