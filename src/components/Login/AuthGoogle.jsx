import React from 'react';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import Style from '../../styles/Login.module.css';
import googleImg from '../../images/google.svg';

function authSocialMedia (){
    const googleProvider =new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
}
const Auth = () =>{
  let history= useHistory();
    function google (e) {
        e.preventDefault();
        authSocialMedia().then( () =>{
            history.push('/Menu')
            }
            )
    }
//This is the template html
    return(
        <div className={`row justify-content-center`}>
   <p className={`${Style.o}`}>-O-</p>
    <img src={googleImg} className={`${Style.google}`} alt="googleLogin" onClick={google}/>
        </div>
    )

}
export default Auth
