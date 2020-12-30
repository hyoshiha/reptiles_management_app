/*import React from 'react';
import firebase from 'firebase';
//import 'firebase/auth';
import firebaseConfig from '../config/firebase';

// Firebase 初期化
if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig);
}

// ユーザ登録
export const signUp = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
        if (user) {
            console.log("Success to Signup")
        }
    })
    .catch(error => {
        console.log(error);
    })
}

// メール＆パスワードログイン
export const emailLogin = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
        alert("Login Success!");
    })
    .catch(error => {
        alert(error.message);
    });
}

// Google ログイン
export const googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    // ログインページにリダイレクト
    console.log("aifiejfoeafe");
    //firebase.auth().signInWithRedirect(provider)
    firebase.auth().signInWithPopup(provider)
    .then(user => {
        alert("success : " + user.user.displayName + "さんでログインしました");
    }).catch(error => {
        alert(error.message);
    })
}

// twitter ログイン
export const twitterLogin = () => {
    var provider = new firebase.auth.TwitterAuthProvider();

    // ログインページにリダイレクト
    firebase.auth().signInWithRedirect(provider);

}

//export default firebaseMap;
*/