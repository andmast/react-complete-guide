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

  switchNameHandler = () => {
    // console.log("clicked");
    this.setState({
      persons: [
        { name: "Lolo", age: 452 },
        { name: "Max", age: 23 },
        { name: "Andrew", age: 11212 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch names</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
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
