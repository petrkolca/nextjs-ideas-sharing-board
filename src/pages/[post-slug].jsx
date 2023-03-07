import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { arrayUnion, Timestamp, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import Message from "../components/Message";

import { Button } from "../styles/Home.styled";
import { CommentCtn, CommentsListing } from "../styles/Message.styled";

const PostDetails = () => {
  // const [user, loading] = useAuthState(auth);
  const route = useRouter();
  const routeData = route.query;
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  // Submit comment
  const sendCommentHandler = async (e) => {
    console.log("comment submitted");
    // check if user is NOT logged-in => redirect
    if (!auth.currentUser) return route.push("/auth/login");

    // notify user if comment field is empty
    if (!comment) {
      toast.error("Don't leave empty comment textarea!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });

      return;
    }

    const docRef = doc(db, "posts", routeData.id);
    await updateDoc(docRef, {
      comments: arrayUnion({
        message: comment,
        avatar: auth.currentUser.photoURL,
        username: auth.currentUser.displayName,
        time: Timestamp.now(),
      }),
    });

    setComment("");
  };

  useEffect(() => {
    console.log("message loaded");
  }, []);

  return (
    <div>
      <Message {...routeData}></Message>
      <CommentCtn>
        <div>
          <textarea
            name="commentsText"
            id="commentsText"
            value={comment}
            placeholder="Write Comment..."
            onChange={onChangeHandler}
            cols="30"
            rows="2"
          ></textarea>
          <Button onClick={sendCommentHandler}>Send Comment</Button>
        </div>
        <CommentsListing>
          <h2>Comments</h2>
          {/* {allComments.map((comment) => {
            return (
              <div>
                <div>
                  
                </div>
              </div>
            );
          })} */}
        </CommentsListing>
      </CommentCtn>
    </div>
  );
};

export default PostDetails;
