import React from "react";
import { robots } from "./Robots";
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }
  searchchange(event) {
    console.log(event.target);
  }

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <Searchbox
          searchfield={this.state.searchfield}
          searchchange={this.searchchange}
        />
        <Cardlist robots={this.state.robots} />
      </div>
    );
  }
}
export default App;
