import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { AuthProvider } from './pages/account/AuthContext';
import Navbar from "./components/navbar/navbar";


function App() {
    const [currentUser, setCurrentUser] = useState([]);
    const [timeActive, setTimeActive] = useState(false);
    const auth = getAuth();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
        })
      }, []);

  return (
    <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <Navbar />
    </AuthProvider>
  );
}

export default App;
