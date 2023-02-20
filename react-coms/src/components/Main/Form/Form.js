import React, { Component } from "react";

import { userContext } from "../../../context/userContext";

class Form extends Component {

  static contextType = userContext;

  constructor(props) {
    super(props)

    this.name = React.createRef();
    this.email = React.createRef();
    this.age = React.createRef();
    this.photoUrl = React.createRef();

  }

  sendInfo = () => {
    //***CONSUMER***
    const { getForm } = this.context; // Consume contexto desde JS

    getForm(this.name.current.value, this.email.current.value, this.age.current.value, this.photoUrl.current.value);// enviar nombre por contexto
    alert("Data sent");

    // Vaciar input + state
    this.name.current.value = "";
    this.email.current.value = "";
    this.age.current.value = "";
    this.photoUrl.current.value = "";
  }

  render() {
    return <div>
      <h1>User Form</h1>
      <p>Name </p>
      <input type="text" ref={this.name} />
      <br />
      <p>Email </p>
      <input type="text" ref={this.email} />
      <br />
      <p>Age </p>
      <input type="text" ref={this.age} />
      <br />
      <p>Photo URL </p>
      <input type="text" ref={this.photoUrl} />
      <br />
      <br />
      <input type="button" onClick={this.sendInfo} value="Send" /></div>;
  }
}

export default Form;
