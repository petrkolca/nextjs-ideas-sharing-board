import { FcGoogle } from "react-icons/fc";

import { LoginCtn, LoginButton } from "../../styles/Login.styled";

const login = () => {
  return (
    <LoginCtn>
      <h2>Join Today</h2>
      <div>
        <h3>Sign in with one of the providers</h3>
        <LoginButton>
          <FcGoogle />
          Sign in with Google
        </LoginButton>
      </div>
    </LoginCtn>
  );
};

export default login;
