import LoginForm from "../components/LoginForm";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoadingView } from "../components/shared/LoadingView";

const Welcome = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const user = useSelector(({ auth }) => auth.user);
  const isChecking = useSelector(({ auth }) => auth.isChecking);

  const optInText = isLoginView
    ? ["Need an account?", "Register"]
    : ["Already registered", "Login"];

  if (isChecking) {
    return <LoadingView />;
  }

  if (user) {
    return <Navigate to={"/home "} />;
  }

  return (
    <>
      <div className="centered-view">
        <div className="centered-container">
          {isLoginView ? <LoginForm /> : <RegisterForm />}
          <small className="form-text text-muted mt-2">
            {optInText[0]}
            <span
              onClick={() => setIsLoginView(!isLoginView)}
              className="btn-link ml-2"
            >
              {optInText[1]}
            </span>
          </small>
        </div>
      </div>
    </>
  );
};

export default Welcome;
