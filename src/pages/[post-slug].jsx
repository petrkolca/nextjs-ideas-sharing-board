import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Message from "../components/Message";

const PostDetails = () => {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  const [] = useState();

  useEffect(() => {
    console.log("message loaded");
  }, []);

  return (
    <div>
      <h1>Enter</h1>
    </div>
  );
};

export default PostDetails;
