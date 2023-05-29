import React, { useState, useEffect } from "react";
import { AuthProvider } from "./AuthContext";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { auth } from "./firebase";
import {onAuthStateChanged} from 'firebase/auth';
import {Navigate} from 'react-router-dom';
import SignUp from "./signUp"
import SignIn from "./signIn";
import VerifyEmail from "./verifyEmail";
import Profile from "./profilePage";
import PrivateRoute from "./PrivateRoute";
import Navbar from "../src/pages/navbar";



function UserApp() {

    const [currentUser, setCurrentUser] = useState(null)
    const [timeActive, setTimeActive] = useState(false)
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user)
      })
    }, [])
  
    return (
      <Router>
        <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
          <Routes>
            <Route exact path='/' element={
              <PrivateRoute>
                <Profile/>
              </PrivateRoute>
            }/>
            <Route path="/login" element={
              !currentUser?.emailVerified 
              ? <SignIn/>
              : <Navigate to='/' replace/>
            } />
            <Route path="/register" element={
              !currentUser?.emailVerified 
              ? <SignUp/>
              : <Navigate to='/' replace/>
            } />
            <Route path='/verify-email' element={<VerifyEmail/>} /> 
          </Routes>  
        </AuthProvider>
    </Router>
    );
  }
  
  export default UserApp;