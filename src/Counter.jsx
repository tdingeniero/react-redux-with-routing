import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { decrement, increment } from "./redux_toolkit2/counter";
import { decrement, increment } from "./redux/ducks/counter";

const Counter = (props) => {
  const { name } = props;
  const [votes, setVotes] = useState(0);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setVotes(votes + 1);
    dispatch(increment());
  };

  const handleDecrement = () => {
    setVotes(votes - 1);
    dispatch(decrement());
  };

  return (
    <div style={{ backgroundColor: "grey", margin: "10px" }}>
      <h2>{name}</h2>
      <h3>{`Vote: ${votes}`}</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
