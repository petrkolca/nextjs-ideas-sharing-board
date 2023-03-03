import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { PostFormCtn } from "../styles/PostForm.styled";
import { Button } from "../styles/Home.styled";
import { async } from "@firebase/util";

const initialPostState = {
  description: "",
};

const Post = () => {
  const router = useRouter();
  const [ post, setPost ] = useState(initialPostState);

  const onChangeHandler = (e) => {
    setPost(e.target.value);
  };

  const onSubmitPostHandler = (e) => {
    e.preventDefault();
    console.log("Post is submitted!", post);

    setPost(initialPostState);
  };

  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <PostFormCtn>
      <form onSubmit={onSubmitPostHandler}>
        <h1>Create a new post</h1>
        <div>
          <h3>Description</h3>
          <textarea
            value={post.description}
            onChange={onChangeHandler}
            name="" id="" cols="30" rows="10"></textarea>
          <p>0/300</p>
        </div>
        <Button full type="submit">Submit</Button>
      </form>
    </PostFormCtn>
  );
};

export default Post;
