import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("TCL: Persons -> getDerivedStateFromProps ");
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("TCL: Persons -> componentWillReceiveProps");
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("TCL: Persons -> shouldComponentUpdate");
  //   //Shallow Comparing Arrays
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

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

  componentWillUnmount() {
    console.log("TCL: Persons -> componentWillUnmount");
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
          isAuth={this.props.auth}
        />
      );
    });
  }
}

export default Persons;
