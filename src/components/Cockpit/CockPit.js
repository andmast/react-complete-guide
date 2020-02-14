import React from "react";
import classes from "./CockPit.module.css";

const CockPit = props => {
  const assignedClasses = [];

  let btnClass = [classes.Button];

  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div>
      <h1>Hi I'm a React app</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button className={btnClass.join(" ")} onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  );
};

export default CockPit;
