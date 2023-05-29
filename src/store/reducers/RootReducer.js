import authReducer from "./AuthReducer";
import tourReducer from "./TourReducer";
import { combineReducers } from "redux";
import {firestoreReducer} from "redux-firestore";


const rootReducer = combineReducers({
    auth: authReducer, 
    tour: tourReducer,
    firestore: firestoreReducer
    
    
})

export default rootReducer;