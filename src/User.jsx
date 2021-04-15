import React from "react";
import { useDispatch } from "react-redux";
import { changeName } from "./redux_toolkit2/user";

const User = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: "blue" }}>
      <p>Name</p>
      <button onClick={() => dispatch(changeName())}>Change name</button>
    </div>
  );
};

export default User;
