import React, { Component } from "react";

import { userContext } from "../../context/userContext";
import Card from "./Card/Card";
import Form from "./Form/Form";

class Main extends Component {
  constructor(props){
    super(props)

    this.state={
      name: "NombreDefecto",
      email:"correoDefecto",
      photoUrl:"lafotoDefectp",
      age:"Defecto"
    }
  }

  setStateOfParent = (name, email, age, photo) => {
    this.setState({name: name,
    email:email,
    photoUrl: photo,
    age:age})
  }

  render() {
    return <div>
      <Form setStateOfParent={this.setStateOfParent} />
      <Card data={this.state} />
    </div>;
  }
}

export default Main;
