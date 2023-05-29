import React, {useState, useEffect} from "react";
import {auth} from "../../index";
import {useAuthValue} from './AuthContext';
import {sendEmailVerification} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import "./account.css";



export default function VerifyEmail() {

	const {currentUser} = useAuthValue()
	const [time, setTime] = useState(60)
	const {timeActive, setTimeActive} = useAuthValue()
	const navigate = useNavigate()

	useEffect(() => {
		const interval = setInterval(() => {
			currentUser?.reload()
			.then(() => {
				if(currentUser?.emailVerified) {
					clearInterval(interval)
					navigate('/')
				}
			})
			.catch((err) => {
				alert(err.message)
			})
		}, 1000)
	}, [navigate, currentUser])

	useEffect(() => {
		let interval = null
		if(timeActive && time !== 0 ){
			interval = setInterval(() => {
				setTime((time) => time - 1)
			}, 300)
		} else if(time === 0){
			setTimeActive(false)
			setTime(20)
			clearInterval(interval)
		}
		return () => clearInterval(interval);
	}, [timeActive, time, setTimeActive])

	const resendEmailVerification = () => {
		sendEmailVerification(auth.currentUser)
		.then(() => {
			setTimeActive(true)
		})
		.catch((err) => {
			alert(err.message)
		})
	}

  	return (
		<div className='container'>
			<div className='verifyEmail'>
				<h3>Подверждение электронной почты</h3>
				<p>
					Уведомление о верификации электронной почты была отправлена на почту:
					<br/>
					<span>{currentUser.email}</span>
				</p>
				<p>Пожалуйста, проверьте свою электронную почту</p> 
				<br></br> 
				   
				<button className="btn btn-danger" 
					onClick={resendEmailVerification}
					disabled={timeActive}>
						Повторить отправку {timeActive && time}
				</button>
			</div>
		</div>
  )
}



