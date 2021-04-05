import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                if(email == null && password == null){
                    alert("Email and password cannot be empty!");
                }else if(email == null){
                    alert("Email cannot be empty!");
                }else if(password == null){
                    alert("Password cannot be empty!");
                }
                else {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                        alert('Sign In Success!')
                    }
                    catch(e) {
                        console.log(e);
                        alert(e);
                    }
                }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                        alert('Account Created Successfuly!')
                    }
                    catch(e) {
                        console.log(e);
                        alert(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    }
                    catch(e) {
                        console.log(e);
                    }
                },
            }}
>
            {children}
        </AuthContext.Provider>
    );
};