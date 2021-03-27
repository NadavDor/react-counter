import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("counters - rendered");

    const {
      onReset,
      counters,
      onIncrement,
      onDecrement,
      onDelete,
      onAdd,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
          Add
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
