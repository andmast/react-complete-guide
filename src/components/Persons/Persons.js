import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("TCL: Persons -> getDerivedStateFromProps ");
    return state;
  }

  // componentWillReceiveProps(props) {
  //   console.log("TCL: Persons -> componentWillReceiveProps");
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("TCL: Persons -> shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("TCL: Persons -> getSnapshotBeforeUpdate");
    return { message: "SnapShot!!" };
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("TCL: Persons -> componentWillUpdate");
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("TCL: Persons -> componentDidUpdate", " Snap Shot:", snapshot);
  }

  render() {
    console.log("TCL: Persons -> render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => {
            this.props.clicked(index);
          }}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => {
            this.props.changed(event, person.id);
          }}
        />
      );
    });
  }
}

export default Persons;
