import React, { useEffect, useRef } from "react";
import classes from "./CockPit.module.css";

const CockPit = props => {
  const toggleBtnRef = useRef();

  useEffect(() => {
    console.log("TCL: CockPit -> useEffect");
    // HTTP Request....
    // const timer = setTimeout(() => {
    //   alert("Saved Data  to the Cloud");
    // }, 1000);

    toggleBtnRef.current.click();

    return () => {
      // clearTimeout(timer);
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

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button
        ref={toggleBtnRef}
        className={btnClass.join(" ")}
        onClick={props.clicked}
      >
        Toggle Person
      </button>
      <button onClick={props.login}>Login</button>
    </div>
  );
};

export default React.memo(CockPit);
