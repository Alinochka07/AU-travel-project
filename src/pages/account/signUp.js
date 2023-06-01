import React, { useState, useEffect } from 'react';
import "./account.css";
import {useNavigate, Link} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile} from 'firebase/auth';
// import {useAuthValue} from './AuthContext';


export default function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    
    
    const [isConfirmPasswordDirty, setIsConfirmPasswordDirty] = useState(false);
    const [confirmPasswordClass, setConfirmPasswordClass] = useState('form-control');
    const [passwordShown, setPasswordShown] = useState(false);
    const [emailError, setShowEmailError] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [change, setChange] = useState(true);
    const [shortPassword, setShortPassword] = useState(false);
    
    const navigate = useNavigate();
    // const {setTimeActive} = useAuthValue();
    const auth = getAuth();

    const onChecked = () => {
        setChange(!true)
    }

    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== ''){
          if (password !== confirmPassword) {
            isValid = false
            setError('Пароль не совпадает')
          }
        }
        return isValid
      }

      const register = (e) => {
        e.preventDefault()
        setError('')
        if(validatePassword()) {
            createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log(user);
                await updateProfile(auth.currentUser, {
                    displayName: firstName
                })
            })
            .then(() => {
                sendEmailVerification(auth.currentUser);
                auth.signOut();
                alert("Верификация отправлена на почту! Пожалуйста, проверьте почту!"); })
            .then(() => {
                navigate('/login')
            })
            .catch(alert)
            
            //   .then(() => {
            //     setTimeActive(true)
            //     navigate('/verify-email')
            //   })
            //   .catch((err) => alert(err.message))
            // })
            // .catch(err => setError(err.message))
        }

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
      }
   

    const handlePassword = (e) => {
    setConfirmPassword(e.target.value);
    setIsConfirmPasswordDirty(true);
    }

   

    
    const onEmailCheck = (e) => {
        const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(e.target?.value && e.target.value.match(isValidEmail)) {
            setShowEmailError(false)
        } else {
            setShowEmailError(true)
        }
    }
    const onPassCheck = (e) => {
        const isValidPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        if(e.target?.value && e.target.value.match(isValidPassword)) {
            setShortPassword(false);
        } else {
            setShortPassword(true);
        } 
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };


    useEffect(() => {
        if(isConfirmPasswordDirty) {
            if(password === confirmPassword) {
                setShowErrorMessage(false);
                setConfirmPasswordClass('form-control is-valid')
            } else {
                setShowErrorMessage(true);
                setConfirmPasswordClass('form-control is-invalid')
            }
        }
    }, [confirmPassword, isConfirmPasswordDirty, password])
    
    return (
        <div className='register-page container'>
            <div className="reg-more">
                <p>Зарегистрируйся, чтобы получить больше бонусов и других возможностей!</p>
            </div>
            <br></br>
            <h3>Создать аккаунт</h3>
            {error && <div className=''>{error}</div>}
            <form onSubmit={register} className="registration_form">
                <div className="first-name">
                    <label id="fname" htmlFor="firstName"></label>
                    <input id="firstName" 
                    value={firstName}
                    onChange = {e => setFirstName(e.target.value)} 
                    placeholder="Имя" type="text"></input>
                </div>

                <div className="last-name">
                    <label id="lname" htmlFor="lastName"></label>
                    <input id="lastName" 
                    value={lastName}
                    onChange = {e => setLastName(e.target.value)} 
                    placeholder="Фамилия" type="text"></input>
                </div>

                <div className="email-address">
                    <label id="eml" htmlFor="email"></label>
                    <input id="email" 
                    value={email}
                    onBlur={onEmailCheck} 
                    required="required" 
                    onChange = {e => setEmail(e.target.value)} 
                    placeholder="E-mail" type="email"></input>
                </div>
                
                <div className="passw">
                    <label id="pss" htmlFor="password"></label>
                    <input id="password" 
                    onBlur={onPassCheck} 
                    className={confirmPasswordClass} 
                    value={password} 
                    onChange = {e => setPassword(e.target.value)}  
                    placeholder="Пароль" 
                    type={passwordShown ? "text" : "password"}
                    ></input>
                    
                </div>
                
                <div className="conf-passw">
                    <label id="confpss" htmlFor="confirmPassword"></label>
                    <input id="confirmPassword" 
                    className={confirmPasswordClass} 
                    value={confirmPassword} 
                    onChange = {handlePassword}  
                    placeholder="Подтвердить пароль" 
                    type={passwordShown ? "text" : "password"}
                    ></input>
                </div>



                <div className='info-messages'>
                    <p>
                        {shortPassword ? <p className="signal_msg">Пароль не соответствует требованиям!</p> : ''}
                        {emailError ? <p className="signal_msg">Неверный email</p> : ''}
                        {showErrorMessage && isConfirmPasswordDirty ? <p className="signal_msg">Пароль не совпадает </p> : ''}
                    </p>
                    <p>
                        <input id="showpass" 
                        onChange={togglePassword}  
                        type="checkbox"></input>
                        <span className="agree">Показать пароль</span>
                    </p>
                    
                    <p>
                        <input id="checked" 
                        onChange={onChecked}  
                        className="agree-checkbox"  type="checkbox"></input>
                        <span className="agree">Я принимаю условия о регистрации указанные в  
                        <a href="/"> Cоглашении о регистрации</a></span>
                    </p>
                    <p id="ifNotChecked"></p>
                </div>
                
                <button id="register-me" 
                disabled={change} 
                type="submit" 
                className="btn btn-link create_account_btn">Сохранить</button>
            </form>
            <br></br>
            <span>
                <p>Уже имеется аккаунт?
                <Link to='/login'> Войти</Link></p>
            </span>
            
        </div>
    )

    }


