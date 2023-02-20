import React, { Component } from "react";

import { userContext } from "../../context/userContext";
import Card from "./Card/Card";
import Form from "./Form/Form";

class Main extends Component {

  render() {
    return <div>
      <Form />
      <userContext.Consumer>
        <Card/>
      </userContext.Consumer>
    </div>;
  }
}

export default Main;
