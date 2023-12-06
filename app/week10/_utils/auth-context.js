"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

// Create a context for authentication
const AuthContext = createContext();

// Authentication context provider component
export const AuthContextProvider = ({ children }) => {
  // State to store the current user
  const [user, setUser] = useState(null);

  // Function to sign in with GitHub
  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Function to sign out
  const firebaseSignOut = () => {
    return signOut(auth);
  };

  // Effect to listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []); // Only run the effect once when the component mounts

  // Provide the user and authentication functions to the context
  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useUserAuth = () => {
  return useContext(AuthContext);
};
