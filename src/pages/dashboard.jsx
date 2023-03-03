import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useCallback } from "react";
import { Button } from "../styles/Home.styled";

const Dashboard = () => {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  // check if the user is LOGGED-IN
  const getData = useCallback(async () => {
    console.log("user test: ", user);

    if (loading) return;
    if (!user) return route.push("/auth/login");
  }, [loading, route, user]);

  const signOutHandler = async () => {
    await auth.signOut();
  };

  useEffect(() => {
    getData();
  }, [user, loading, getData]);

  return (
    <div>
      <h1>Your Posts</h1>
      <div>posts</div>
      <Button onClick={signOutHandler}>Sign out</Button>
    </div>
  );
};

export default Dashboard;
