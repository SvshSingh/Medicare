import React, { useState, createContext, useEffect } from "react";
import { authentication } from '../Firebase/config';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [ user, setUser ] = useState(null);
    const [ ULstatus, setULstatus ] = useState(true);

    useEffect( () => {
        const unsubscribe = authentication.onAuthStateChanged( (e) => {
            if(e != null){
                setUser(e);
                setULstatus(false);
            } else {
                setUser(null);
                setULstatus(false);
            }
        })
        return() => unsubscribe();
    }, [])
    return (
        <AuthContext.Provider value = { [user, ULstatus] }>
            { props.children }
        </AuthContext.Provider>
    )
}