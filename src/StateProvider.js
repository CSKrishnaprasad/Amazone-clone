import React,{ createContext,useContext,useReducer} from "react"


//prepares the Datalayer
export const StateContext = createContext();

// Wrap our app and provide Datalayer
export const StateProvider =({ reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
    );


//pull info from datalayer
export const useStateValue = () => useContext(StateContext)

