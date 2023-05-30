import React from 'react';
import App from './App';
import { getAuth } from 'firebase/auth';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.css';
import {createStore, applyMiddleware, compose} from "redux";
import "firebase/auth";
import "firebase/firestore";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import rootReducer from './store/reducers/RootReducer';
import { BrowserRouter } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/auth';
import { render } from 'react-dom';
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import { getStorage } from "firebase/storage";
import 'firebase/storage';



const firebaseConfig = {
	apiKey: "AIzaSyAvMw4FhVOLXh1BFnz2fVN2-1t0YgsCIok",
	authDomain: "au-travel.firebaseapp.com",
	projectId: "au-travel",
	storageBucket: "au-travel.appspot.com",
	messagingSenderId: "201367498567",
	appId: "1:201367498567:web:75a7c3ba806fdf39d3a662",
	measurementId: "G-NRQFR2V4SG"
};


const rrfConfig = {
	toursProfile: "tours",
	userProfile: "users",
	useFirestoreForProfile: true,
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
.settings({ timestampsInSnapshots: true, merge: true });
const auth = getAuth(app)

const storage = getStorage(app);


const initialState = {};

const store = createStore(rootReducer, initialState,
	compose(
        applyMiddleware(thunk
			.withExtraArgument({getFirebase, getFirestore})),
        	reduxFirestore(firebaseConfig)
    )
);

const rrfProps = {
	firebase,
	useFirestoreForProfile: true,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance
};

export {auth, db, storage};


render(
		// <React.StrictMode>
			<Provider store={store}>
				<ReactReduxFirebaseProvider {...rrfProps}>
					<BrowserRouter>
						<App/>
					</BrowserRouter>
				</ReactReduxFirebaseProvider>
			</Provider>,
		// </React.StrictMode>,
		document.getElementById('root')
);



