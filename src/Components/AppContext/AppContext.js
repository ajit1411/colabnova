import React, { useContext, useReducer } from 'react'


export const AppContext = React.createContext();

const initialState = {
    userData: {}
};

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(redcure, initialState)
    const value = { ...state, dispatch }
    return <AppContext.Provider value={value}> {children} </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext);

const redcure = (state, action) => {
    let newState = null
    const initialState = {
        userData: {}
    }
    switch (action.type) {
        case 'reset':
            return {}
            break;

        default:
            break;
    }
}