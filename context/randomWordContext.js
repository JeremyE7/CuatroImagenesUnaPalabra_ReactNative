import { createContext, useState } from "react";

export const RandomWordContext = createContext()

export function RandomWordContextProvider ({children}){
    
    const [word, setWord] = useState('');
    
    return (
        <RandomWordContext.Provider value={{word, setWord}}>
            {children}
        </RandomWordContext.Provider>
    )
}