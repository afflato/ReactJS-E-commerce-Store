import {createContext, useState} from "react";

const AuthContext = createContext({});

function AuthProvider({children}){
    const [auth,setAuth] = useState({email:"", token:""});

    return <AuthContext.Provider value={{auth,setAuth}}>
        {children}
    </AuthContext.Provider>
}


export {AuthContext,AuthProvider};