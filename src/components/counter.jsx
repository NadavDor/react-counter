import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProp", prevProps);
  }

  componentWillUnmount() {
    console.log("counter will unmount.");
  }

  render() {
    console.log("counter - rendered");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn brn-secondary btn-sm m-1"
        >
          -
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn brn-secondary btn-sm m-1"
        >
          +
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
