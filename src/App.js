import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter/Counter";

class App extends Component {
  state = {
    names: [
      "Brian",
      "Delph",
      "Gordon",
      "Huimin",
      "Kaixin",
      "Seb",
      "Sheldon",
      "Shun",
      "Tim",
      "xfchia",
      "Yamin"
    ]
  };

  reset = () => {
    this.setState(() => {
      return {
        names: "Seb"
      };
    });
  };

  render() {
    return (
      <div>
        <h1 id="title">Jumpstarters Counter</h1>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <div className="App">
          {this.state.names.map((name, i) => {
            return <Counter name={name} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
