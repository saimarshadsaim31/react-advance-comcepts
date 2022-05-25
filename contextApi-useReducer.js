import React ,{useContext,useReducer} from 'react'
//step 6: create a reducer function or import it from the seperate reducer file
//const reducer =(state,action)=>{}, import reducer from "./reducer.js"     //step 6

//step 1: create a context using React.createContext()
const AppContext = React.createContext();                                   //step 1

//step 5: create an initial state of the whole app                          //step 5
const initialState={
    count:0
}

//step 2: create a provider component and wrap the whold app.js with it 
const AppProvider=({children})=>{                                           //step 2

//step 4: initilize the useReducer hook                                     //step 4
    const [state,dispatch]=useReducer(reducer,initialState);

//step 7: pass the state to the value prop of the provider                  //step 7
//so that it is available in every part of the app and can be accessed any where
return <AppContext.Provider value={...state}>{children}</AppContext.Provider>
}

//step 3: create a custom hook for making work easy                         //step 3
const useGlobalContext=()=>{
    return useContext(AppContext);
}

//step 8: now state is available in the whold app dispacth the actions with type properties and handle these actions in the reducer function and based on the type perform necessary actions and return the new state



