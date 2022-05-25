import React, { useContext } from "react";

//step1: create a context
//create  the context object
//name can be anything

const AppContext = React.createContext();

//step2: create a provider
//create the provider component
//this is the component that will be used to wrap the whole app in app.js file
//takes the children as a prop from the app.js file
//has a value prop where state is stored and can be accessed anywhere in the app tree

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={""}>{children}</AppContext.Provider>;
};

//step3: create a global context hook
//custom hook to access the context
//otherwise we would have to use "const context = useContext(AppContext);" in every component where we want to access the context
//now we can use the custom hook "const context=useGlobalContext();"
//ps context contains the state and all other functions stored in the value prop of the provider component

export const useGlobalContext = () => {
  return useContext(AppContext);
};
