import React, { useEffect } from "react";
import classes from "./CockPit.module.css";

const CockPit = props => {
  useEffect(() => {
    console.log("TCL: CockPit -> useEffect");
    // HTTP Request....
    const timer = setTimeout(() => {
      alert("Saved Data  to the Cloud");
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log("TCL: CockPit -> cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("TCL: Cockpit -> 2nd useEffect");
    return () => {
      console.log("TCL: CockPit ->  2nd cleanup");
    };
  });

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
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button className={btnClass.join(" ")} onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  );
};

export default CockPit;
