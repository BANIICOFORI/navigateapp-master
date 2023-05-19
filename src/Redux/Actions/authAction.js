import firebase from "../../Firebase/Config";
//import { auth } from "../../Firebase/Config";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup 
   } from 'firebase/auth';

export function createEmailAccount(auth,email,password){
         return async (dispatch)=>{
            try {
            const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(auth,email,password);
           console.log(user)
            dispatch(loggedIn(user))
           } catch (error) {
            //console.log(error);
            dispatch(registerError(error.message))
           } 
        }
    }
export function loginEmailAccount (email,password){
    return async (dispatch)=>{
        try {
            const user = await firebase
            .auth()
            .signInWithEmailAndPassword(email,password);
             dispatch(loggedIn(user))
            } catch (error) {
            // console.log(error);
            dispatch(registerError(error.message))
            } 
    }
}

export function logout(){
    return async (dispatch)=>{
        try {
            await firebase.auth().signOut();
            dispatch(loggedOut())
            } catch (error) {
             console.log(error);
            } 
    } 
}

function loggedIn (user){
    return{
        type:"LOGGED_IN",
        payload: user,
    }
}
function loggedOut (user){
    return{
        type:"LOGGED_OUT",
    }
}

export function registerError(error){
    return{
        type : "REGISTER_ERROR",
        payload : error
    }
}