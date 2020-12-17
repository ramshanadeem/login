import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCJUhNrq0uJAMpEf05L_OhhTMNmYiRrVao",
    authDomain: "login-d8d11.firebaseapp.com",
    projectId: "login-d8d11",
    storageBucket: "login-d8d11.appspot.com",
    messagingSenderId: "151161928076",
    appId: "1:151161928076:web:2a231069a0272e2ff8fea9"
  };
  
 const fire = firebase.initializeApp(firebaseConfig);
 export default fire ;