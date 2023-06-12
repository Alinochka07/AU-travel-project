import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";
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
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import { getStorage } from "firebase/storage";
import 'firebase/storage';



const firebaseConfig = {
	apiKey: "AIzaSyAfVx2EXEVSyXORDSNOM0OjbegrzUZHWJU",
	authDomain: "au-react.firebaseapp.com",
	projectId: "au-react",
	storageBucket: "au-react.appspot.com",
	messagingSenderId: "368538936254",
	appId: "1:368538936254:web:7d3dea3cb87fbcca0f4fef",
	measurementId: "G-HRE16DWGMX"
  };


const rrfConfig = {
	toursProfile: "tours",
	userProfile: "users",
	applicationProfile: "applications",
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

// const root = ReactDOM.createRoot(document.getElementById('root'));

render(
	<React.StrictMode>
			<Provider store={store}>
				<ReactReduxFirebaseProvider {...rrfProps}>
					<BrowserRouter>
						<App/>
					</BrowserRouter>
				</ReactReduxFirebaseProvider>
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
		// <React.StrictMode>
		// 	<Provider store={store}>
		// 		<ReactReduxFirebaseProvider {...rrfProps}>
		// 			<BrowserRouter>
		// 				<App/>
		// 			</BrowserRouter>
		// 		</ReactReduxFirebaseProvider>
		// 	</Provider>
		// </React.StrictMode>
);



