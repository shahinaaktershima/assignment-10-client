import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState([]);
    const[loading,setLoading]=useState(true);
    const provider= new GoogleAuthProvider();
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const google=()=>{
        return signInWithPopup( auth,provider)
    }

    const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
       const logOut=()=>{
        setLoading(true);
        return signOut(auth);
       }
       useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
       },[])   
    const authInfo={
        user,
        loading,
        createUser,
        logIn,
        google,
        logOut
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;