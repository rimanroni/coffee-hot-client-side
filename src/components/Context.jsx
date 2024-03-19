import React, { createContext, useState  } from 'react';
import auth from '../Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
export const MyContext = createContext(null)
const Context = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const AuthInfo = {
           user,
           createUser,
           logInUser, 
           loading
    }
    return (
        <MyContext.Provider value={AuthInfo}>
            {children} 
        </MyContext.Provider>
    );
};

export default Context;