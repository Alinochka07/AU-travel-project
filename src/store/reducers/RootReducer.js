import authReducer from "./AuthReducer";
import tourReducer from "./TourReducer";
import applicationReducer from "./ApplicationReducer";
import { combineReducers } from "redux";
import {firestoreReducer} from "redux-firestore";


const rootReducer = combineReducers({
    auth: authReducer, 
    tour: tourReducer,
    application: applicationReducer,
    firestore: firestoreReducer
    
    
})

export default rootReducer;