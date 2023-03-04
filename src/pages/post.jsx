import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { PostFormCtn, WordCount } from "../styles/PostForm.styled";
import { Button } from "../styles/Home.styled";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const initialPostState = {
  description: "",
};

const Post = () => {
  const router = useRouter();
  const [post, setPost] = useState(initialPostState);
  const [user, loading] = useAuthState(auth);

  // listen value in textarea and setPost description object
  const onChangeHandler = (e) => {
    setPost({ ...post, description: e.target.value });

    console.log("post text: ", post);
  };

  // Submitting post
  const onSubmitPostHandler = async (e) => {
    e.preventDefault();
    console.log("Post is submitted!", post);

    // Check if user is allowed to submit the post
    // notify user descripiton is empty
    if (!post.description) {
      toast.error("Description Field is empty!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });

      return;
    }

    // notify user descripiton is too long
    if (post.description > 250) {
      toast.error("Description is too long!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });

      return;
    }

    // POST into the Firestore Database
    const collectionRef = collection(db, "posts");
    await addDoc(collectionRef, {
      ...post,
      timestamp: serverTimestamp(),
      user: user.uid,
      avatar: user.photoURL,
      username: user.displayName,
    });

    // clearing form out
    setPost(initialPostState);
    // redirect back to homepage with list of all posts
    return router.push("/");
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
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <WordCount
            className={post.description.length > 250 ? "hasError" : ""}
          >
            {`${post.description.length}/250`}
          </WordCount>
        </div>
        <Button full type="submit">
          Submit
        </Button>
      </form>
    </PostFormCtn>
  );
};

export default Post;
