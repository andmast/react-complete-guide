import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import classes from "./Person.module.css";
// import Aux from "../../../HOC/Aux";
import WithClass from "../../../HOC/withClass";

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

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};

export default WithClass(Person, classes.Person);
