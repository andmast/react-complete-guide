import React, { Component } from "react";
import classes from "./App.module.css";

import Persons from "../components/Persons/Persons";
import CockPit from "../components/Cockpit/CockPit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("TCL: App -> constructor");
  }

  state = {
    persons: [
      { id: "asdada", name: "Andrea", age: 32 },
      { id: "alskdfjs", name: "Max", age: 23 },
      { id: "aasdase", name: "Andrew", age: 12 }
    ],
    showPersons: false,
    showCockPit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("TCL: App -> getDerivedStateFromProps", props);
    return state;
  }
  componentDidMount() {
    console.log("TCL: App -> componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("TCL: App -> shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("TCL: App -> componentDidUpdate");
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("TCL: App -> render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockPit: false });
          }}
        >
          Remove CockPit
        </button>
        {this.state.showCockPit ? (
          <CockPit
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
            title={this.props.appTitle}
          />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default App;
