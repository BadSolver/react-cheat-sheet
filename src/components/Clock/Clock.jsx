import React from "react";
import { List } from "./List";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}
