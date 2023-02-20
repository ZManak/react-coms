import React, { Component } from "react";
import { userContext } from "../../context/userContext";

class Header extends Component {
  
  static contextType = userContext;

  render() {
    return <div>
      <h1>Header</h1>
      <userContext.Consumer>
        {({ user, clear }) => <span>Hola, {user.name} <button onClick={clear}>CLEAR</button></span>
 }      
      </userContext.Consumer>
    </div>;
  
}
}
export default Header;
