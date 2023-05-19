import {legacy_createStore as createStore,applyMiddleware} from "redux"; 
import thunk from "redux-thunk";
import authReducer from "./Reducers/authReducer";
const Store = createStore(authReducer, applyMiddleware(thunk))
export default Store;