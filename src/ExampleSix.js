import React, { useEffect, useReducer } from "react";

const initialValue = {
  users: [],
  error: "",
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        users: action.data,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        users: [],
        error: "Something went wrong.",
      };
    default:
      return state;
  }
};

const ExampleSix = () => {
  const [userData, dispatch] = useReducer(reducer, initialValue);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", data: data });
      })
      .catch(() => {
        dispatch({ type: "ERROR" });
      });
  }, []);
  console.log(userData);
  return (
    <div>
      {userData.loading && <p>Loading... </p>}
      {!userData.loading && (
        <>
          {userData?.users?.map((user) => (
            <p>Name: {user?.name}</p>
          ))}
        </>
      )}
      {userData.error || null}
    </div>
  );
};

export default ExampleSix;
