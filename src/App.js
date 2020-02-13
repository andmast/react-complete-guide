import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Andrea", age: 32 },
      { name: "Max", age: 23 },
      { name: "Andrew", age: 12 }
    ],
    otherState: "some other values"
  };

  switchNameHandler = newName => {
    // console.log("clicked");
    this.setState({
      persons: [
        { name: newName, age: 452 },
        { name: "Max", age: 23 },
        { name: "Andrew", age: 12 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Andrea", age: 452 },
        { name: "Max", age: 23 },
        { name: event.target.value, age: 12 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler("Lolo")}>
          Switch names
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Andrea!!!")}
          changed={this.nameChangeHandler}
        >
          My hobbies: Gaming
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
