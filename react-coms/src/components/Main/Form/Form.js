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

    this.props.setStateOfParent(this.name.current.value, this.email.current.value, this.age.current.value, this.photoUrl.current.value)

    // Vaciar input + state
    this.name.current.value = "";
    this.email.current.value = "";
    this.age.current.value = "";
    this.photoUrl.current.value = "";
  }

  handle = () => {
    this.props.setStateOfParent(this.name.current.value, this.email.current.value, this.age.current.value, this.photoUrl.current.value)
  }

  erase =() => {
    this.props.setStateOfParent("", "", "", "")
  }

  render() {
    return <div>
      <h2>User Form</h2>
      <p>Name</p>
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
      <input type="button" onClick={this.sendInfo} value="Send" />
      <input type="button" onClick={this.erase} value="LogOut" />
      </div>;
  }
}

export default Form;
