import React, { Component } from "react";
import Menu from "./Menu";

export default class App extends Component {
  render() {
    return (
      //naming our props with the "type" call. Calling the props by name in the curly braces.
      <div className="app">
        <Menu type={"breakfast"} />
        <Menu type={"lunch"} />
      </div>
    );
  }
}
