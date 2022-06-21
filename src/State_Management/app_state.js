import React, {useState, createContext} from 'react'

export const AppContext = createContext(null);

export const AppContextProvider = ({children}) =>{
    const [state, setAppState] = useState({
        userName: '',
        isLogin:false,
        isRegisteredView:false,
    });
    return (
        <AppContext.Provider value={{state, setAppState}}>
            {children}
        </AppContext.Provider> 
    );
}