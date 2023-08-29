import { useState } from "react";
// import LoginForm from "../../components/LogInForm/LogInForm"
import FunctionalSignUpForm from "../../components/SignUpForm/FunctionalSignUpForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const AuthPage = () => {
  const [showLogIn, setShowLogIn] = useState(true);

  return (
    <main>
      <div className="">
        <h1>Auth Page</h1>
        <button
          onClick={() => {
            setShowLogIn(!showLogIn);
          }}
        >
          {showLogIn ? "SIGN UP" : "LOG IN"}
        </button>
      </div>
      {/* <SignUpForm /> */}
      {showLogIn ? (
        // <LoginForm />
        <p>log in</p>
      ) : (
        <FunctionalSignUpForm />
      )}
    </main>
  );
};

export default AuthPage;