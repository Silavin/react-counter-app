import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  addValue = () => {
    this.setState(currentState => {
      return { value: currentState.value + 1 };
    });
  };

  minusValue = () => {
    this.setState(currentState => {
      return { value: currentState.value - 1 };
    });
  };

  valueDetection = () => {
    const { value } = this.state;
    if (value < 0) {
      return <h3 className="negative">Negative</h3>;
    }
    if (value === 0) {
      return <h3 className="zero">Zero</h3>;
    }
    if (value > 0) {
      return <h3 className="positive">Positive</h3>;
    }
  };

  render() {
    return (
      <div className="counterContainer">
        <h3 className="names">{this.props.name}</h3>
        {this.valueDetection()}
        <h1 className="big">{this.state.value}</h1>
        <div className="buttonContainer">
          <button className="minus" onClick={this.minusValue}>
            -
          </button>
          <button className="plus" onClick={this.addValue}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
