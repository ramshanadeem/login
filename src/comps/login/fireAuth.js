import React,{useState,useEffect} from 'react'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import fire from '../../config/firebase'

function FireAuth() {
    const [user,setUser]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setpasswordError]=useState('');
    const [hasAccount,setHasAccount]=useState(false);
    const clearInputs = () => {
        setEmail("");
        setPassword("");
    }
    const clearErrors = () => {
        setEmailError("");
        setpasswordError("");
    }
 const handleSignup = () => {
        clearErrors();
        fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch(error=>{
        switch(error.code){
          case"auth/email-already-in-use":
          case"auth/invalid-email":
          
          setEmailError(error.message);
          break;
          case"auth/weak-password":
          setpasswordError(error.message);
          break;
        }
      });
    }
    const handleLogin = () => {
        clearErrors();
           fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => {
                switch (error.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(error.message);
                        break;
                    case "auth/wrong-password":
                        setpasswordError(error.message);
                        break;
                }
            });
    }
    const handleLogout = () => {
        fire.auth().signOut();
    }
    const authListner=()=>{
        fire.auth().onAuthStateChanged(user=>{
          if(user){
            clearInputs();
            setUser(user);
          }else {
            setUser("");
          }
        })
      };
      useEffect(()=>{
        authListner();
      },[])
      
    return (
        <div>
            { user ?
                (<Home />)
                :
                (<Login
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    passwordError={passwordError}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    setpasswordError={setpasswordError} />)
            }

        </div>
    )
}

export default FireAuth