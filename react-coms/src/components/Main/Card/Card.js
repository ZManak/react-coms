import React, { Component } from "react";

class Card extends Component {

  constructor(props) {
    super(props)
    }


    render() {
      return <div>
        <h3>Name:</h3>
        <p>{this.props.data.name}</p>
        <h3>Correo:</h3>
        <p>{this.props.data.email}</p>
        <h3>Age</h3>
        <p>{this.props.data.age}</p>
        <h3>Photo</h3>
        <img src={this.props.data.photoUrl} alt={this.props.data.name} />
    </div>;
  }
}

export default Card;
