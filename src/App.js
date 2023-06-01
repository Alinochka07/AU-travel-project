import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { AuthProvider } from './pages/account/AuthContext';
import Navbar from "./components/navbar/navbar";
import PrivateRoute from "./pages/account/PrivateRoute";
import Profile from "./pages/account/profilePage";
import HomePage from "./pages/homePage";
import SignIn from "./pages/account/signIn";
import SignUp from "./pages/account/signUp";
import VerifyEmail from "./pages/account/verifyEmail";
import TourDetails from "./pages/tours-page/tour-details";
import AllPopularDestinations from "./pages/tours-page/AllPopularDestinations"
import SearchPage from "./pages/searchPage";




function App() {
    const [currentUser, setCurrentUser] = useState([]);
    const [timeActive, setTimeActive] = useState(false);
    const auth = getAuth();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
        })
      }, [auth]);

  return (
    <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <Navbar />
        <Routes>
            <Route exact path='/profile' element={
                <PrivateRoute>
                    <Profile/>
                </PrivateRoute>
            }/>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/login" element={
                !currentUser ? <SignIn/> : <Navigate to='/register'/>
            } />
            <Route path="/register" element={
                !currentUser ? <SignUp/> : <Navigate to='/'/>
            } />
            <Route path='/verify-email' element={<VerifyEmail/>} /> 
            <Route path='/tour/:id' element={<TourDetails/>} />
            <Route path='/all-popular-destinations' element={<AllPopularDestinations/>}/>
            <Route path='/results' element={<SearchPage/>}/>
            
        </Routes>
    </AuthProvider>
  );
}

export default App;
