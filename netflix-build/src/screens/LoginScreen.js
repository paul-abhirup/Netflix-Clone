import React,{ useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen'

function LoginScreen() {

  const [signIn, setSignIn] = useState(false);
  // signIn is state variable and setSignIn is a function that will change the value of signIn ie setState
  //using useState hook we set the initial value of signIn to false

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        {/*
         Here is the explanation for the code above: 
         1. onClick is an event
        listener that will listen to the event of a user clicking on the button.
        2. The function that is called when the user clicks on the button is an
        anonymous function, which is a function that does not have a name. This
        is why the function is defined using an arrow function syntax. 
        3. When
        the button is clicked, the function will set the state of the variable
        signIn to true. 
        4. The value of signIn will determine whether the modal
        is shown or not. This is because of the conditional rendering that we
        have done in the App.js file. If the signIn state is true, the modal
        will be shown. If the signIn state is false, the modal will not be
        shown.
        */}
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          /* 
          Here is the explanation for the code above:
            1. The ternary operator is used, which is a shortcut for an if-else statement.
            2. The condition is signIn, which is a variable that is created using the useState hook.
            3. The first value of the useState hook is false.
            4. The second value of the useState hook is a function that can be used to change the value of the first value.
            5. When the signIn variable is boolean so, if it is true, the SignupScreen component will be rendered.
            6. When the signIn variable is false, the SignupScreen component will not be rendered.
            7. The SignupScreen component is rendered when the user clicks on the Sign In button.
            */
          <>
            <h1>Unlimited films, TV shows and more</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// {signIn ? (<SignupScreen />) : (<></>)}
/* Here is the explanation for the code above:
1. The code above is the ternary operator. It is used to simplify if-else statements in React.
2. The SignIn state is a boolean value. If the value is true, the code will render the SigninScreen component, otherwise, it will render nothing.
3. The boolean value of the SignIn state is determined by the user's input. If the user clicks the Sign in button, the value of SignIn state will be changed to true and the SigninScreen component will be rendered. If the user clicks the Sign up button, the value of SignIn state will be changed to false and the SignupScreen component will be rendered. */

export default LoginScreen;
