import React, { useReducer } from "react";

//step 1: call the useReducer hook
//useReducer have two things just like useState
//when we invoke the hook, it returns an array with two elements
//first is the current state
//second is the dispatch function

//it is different from use state because we pass two arguments to the useReducer hook
//first is the reducer function
//second is the initial state or default state, just like useState

const initialState = {
  count: 0, //initial state
};

const useReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState); //step 1: calling the useReducer hook
  const handleSubmit = () => {
    dispatch({ type: "INCREMENT" }); //step 3: dispatching an action
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={state.name} onChange={handleChange} />
      <button type="submit">increment by 1</button>
    </form>
  );
};

export default useReducer;

//step 2: create the reducer function
//this function will be called by the dispatch function
//reducer function takes two arguments
// one is old state right before the update which you are going to make
// other one is action and it spits back the new state
//reducer function is gernerally created in a seperate reducer.js file
// in the end useReducer is looking for a function, "reducer" that will manipulate the state and this will happen when we dispatch an action
//the reducer function should always return a state, if not nothing will work

//step 2: making the reducer function
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    //step 4: handling the action and returning state
    return { ...state, count: state.count + 1 };
  }
};

//step 3: call the dispatch function with an action object
//whenever you want to do something to the state or affect anything in state, you always need to call the dispatch function
//then this dispatch function will go through the reducer function and update the state
//in dispatch function we pass an action object
//action object has a type property (which can be anything) and payload property
//e,g,      dispatch({type: "Increment")
//payload is the data that you want to update the state with or you want to send with the action which can help you in handling the action

//step 4: handle the dispatched action in the reducer
//once an action is dispatched with a type, that action should be handled in the reducer function
//implement the functionality that you want to happen when the action is dispatched or what change you want to make in the current state then always remenber to return the new state

//ps: multiple actions can be dispathed and then can be handled in reducer function
