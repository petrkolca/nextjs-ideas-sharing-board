import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

import { LoginCtn, LoginButton } from "../../styles/Login.styled";

const Login = () => {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  //Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await route.push("/");
      // eslint-disable-next-line prettier/prettier
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      // if user is logged in go HOME
      void route.push("/");
    } else {
      // stay in login page for user to login
      console.log("login");
    }
  }, [route, user]);

  return (
    <LoginCtn>
      <h2>Join Today</h2>
      <div>
        <h3>Sign in with one of the providers</h3>
        <LoginButton onClick={GoogleLogin}>
          <FcGoogle />
          Sign in with Google
        </LoginButton>
      </div>
    </LoginCtn>
  );
};

export default Login;
