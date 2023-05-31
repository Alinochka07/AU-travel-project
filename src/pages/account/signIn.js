import React, { useState } from "react";
import "./account.css";
import google from "../../img/web-photos/google.png";
import { useAuthValue } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";



export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('') ;
    const [error, setError] = useState('');
    const {setTimeActive} = useAuthValue();
    const firebase = useFirebase();
    const navigate = useNavigate();
    const auth = getAuth();


    const signin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {

            if(!auth.currentUser.emailVerified) {
                    sendEmailVerification(auth.currentUser)
                    .then(() => {
                        setTimeActive(true)
                        navigate('/profile')
                    })
                    .catch(err => alert(err.message))
                    } else {
                        navigate('/')
                    }
                    })
        .catch(err => setError("Неверный пароль"))
    }




    const signInWithGoogle = () => {
        firebase
            .login({
                provider: "google",
                type: "popup",
            })
            .then((result) => {
                const name = result.user.displayName;
                const email = result.user.email;
                const avatar = result.user.photoURL;

                localStorage.setItem('name', name);
                localStorage.setItem('email', email);
                localStorage.setItem('avatar', avatar);
            })
            .then(() => {
                navigate("/profile");
            })
            .catch((error) => {
                console.log(error)
            })
    };


    return (
                <div className="login-page container">
                    {!signInWithGoogle ? <Link to="/profile"/> : 
                    <div>
                        <h3 id="or"> Войти в свой аккаунт </h3>
                            <form onSubmit={signin} name='signin_form'>
                                <div className="login-form">
                                    <div className="email-address">
                                        <label  id="emal" htmlFor="login-email"></label>
                                        <input  id="login-email" 
                                                value={email} 
                                                required  
                                                placeholder="E-mail" 
                                                type="email"
                                                onChange={e => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="passw">
                                        <label  id="pss" htmlFor="login-password"></label>
                                        <input  id="login-password"  
                                                placeholder="Пароль"    
                                                type="password"
                                                value={password}
                                                required
                                                onChange={e => setPassword(e.target.value)}/>
                                    </div>
                                    {error && <p className="signal_msg">{error}</p>}
                                    <button id="login-me" type="submit" className="btn btn-link login_account_btn">Войти</button>
                                </div>
                            </form>
                            <p className="signal_msg"></p>
                            <p>или</p>
                            <button 
                                id="register-with-google" 
                                type="button" 
                                onClick={(event) => {event.preventDefault(); signInWithGoogle()}}
                                className="btn btn-link sign-up-google">
                                    Войти через <img alt="google_logo" src={google} width="23px"></img>
                            </button>
                            <br></br>
                            <br></br>
                            <p>Нет аккаунта?    
                                <Link to='/register'> Зарегистрируйся сейчас!</Link>
                                </p>
                    </div>
                    }
                </div>
      );
    
}






