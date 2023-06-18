import React,{ useRef } from 'react'
import { auth } from '../firebase'
import './SignupScreen.css'

function SignupScreen() {

  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const register = (e) =>
  {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
          ).then((authUser) => {
            console.log(authUser);
          }).catch((error) => {
            alert(error.message);
    });
  };

  const signIn = (e) => {
      e.preventDefault();

      auth.signInWithEmailAndPassword(
         emailRef.current.value,
         passwordRef.current.value
          ).then((authUser) => {
                  console.log(authUser);
          }).catch((error) => {
                  alert(error.message);
          });
    };
//e.preventDefault() is used to prevent the default behaviour of the form which is to refresh the page
//e is the event object which is passed to the function as an argument when the function is called by the event listener which is the onClick event listener in this case 

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email"  />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className='signupScreen__gray'>New to Netflix?  </span>
          <span className='signupScreen__link' onClick={signIn}> Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;