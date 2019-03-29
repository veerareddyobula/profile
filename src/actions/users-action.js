import { firebaseApp } from "../firebase/firebase";
import { 
    GET_NEW_USER_SUCCESS,
    GET_NEW_USER_FAILURE,
    INSERT_NEW_USER_SUCCESS, 
    INSERT_NEW_USER_FAILURE 
  } from "./users-action-types";

export const addNewUser = newUser => async dispatch => {
  firebaseApp.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then((snapshot)=>{
    console.log('--- addNewUser snapshot --==> ', snapshot);
    dispatch({
      type: INSERT_NEW_USER_SUCCESS,
      payload: {status: 200, message:'success', snapshot}
    })
  }, (error)=>{
    console.log('--- addNewUser error --==> ', error);
    dispatch({
      type: INSERT_NEW_USER_FAILURE,
      payload: {status: 500, message:'failure', error}
    })
  });
};

export const validateUser = user =>  async dispatch => {
  firebaseApp.auth().signInWithEmailAndPassword(user.email, user.password).then((snapshot)=>{
    console.log('--- addNewUser snapshot --==> ', snapshot);
    dispatch({
      type: GET_NEW_USER_SUCCESS,
      payload: {status: 200, message:'success', snapshot}
    })
  }, (error)=>{
    console.log('--- addNewUser error --==> ', error);
    dispatch({
      type: GET_NEW_USER_FAILURE,
      payload: {status: 500, message:'failure', error}
    })
  });
};