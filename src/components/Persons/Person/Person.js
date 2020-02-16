import React, { Component, Fragment } from "react";

import classes from "./Person.module.css";
import Aux from "../../../HOC/Aux";

class Person extends Component {
  render() {
    console.log("TCL: Person -> render");
    return (
      <Fragment>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I'm {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
      </Fragment>
    );
  }
}

export default Person;
