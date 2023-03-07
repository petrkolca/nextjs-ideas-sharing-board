/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  arrayUnion,
  Timestamp,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import Message from "../components/Message";

import { Button } from "../styles/Home.styled";
import {
  CommentCtn,
  CommentsListing,
  UserProfileImg,
} from "../styles/Message.styled";

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
  const sendCommentHandler = async () => {
    console.log("comment submitted");

    try {
      // check if user is NOT logged-in => redirect
      if (!auth.currentUser) {
        await route.push("/auth/login");
        throw new Error("User is not logged in.");
      }

      // notify user if comment field is empty
      if (!comment) {
        throw new Error("Comment field is empty.");
      }

      const docRef = doc(db, "posts", routeData.id);
      // updasting current post data
      // by submitting into Post database and creating new ARRAY
      // with arrayUnion function
      await updateDoc(docRef, {
        comments: arrayUnion({
          message: comment,
          avatar: auth.currentUser.photoURL,
          username: auth.currentUser.displayName,
          time: Timestamp.now(),
        }),
      });

      setComment("");
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }
  };

  // useCallback function as it is dependancy for useEffect
  // and called only on useEffect request
  const getComments = useCallback(async () => {
    const docRef = doc(db, "posts", routeData.id);
    // retrieving data from current post.id
    const docSnapshot = await getDoc(docRef);
    // check if the snapshot exists
    if (docSnapshot.exists()) {
      // setting all comments retreived from DATA of the current post.id
      setAllComments(docSnapshot.data().comments);
    }
  }, [routeData.id]);

  useEffect(() => {
    if (!route.isReady) return;
    getComments();
  }, [route.isReady, getComments]);

  // useMemo function memorise the computed value of the Comments Listing
  const commentsListing = useMemo(() => {
    return allComments.map((comment, index) => {
      return (
        <div key={index}>
          <UserProfileImg>
            {comment.avatar.length > 0 && (
              <Image
                src={comment.avatar}
                alt={comment.username}
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                className=""
              />
            )}
          </UserProfileImg>
          <h2>{comment.username}</h2>
          <div>
            <p>{comment.message}</p>
          </div>
        </div>
      );
    });
  }, [allComments]);

  // console.log("routeData: ", route.isReady);
  if (!route.isReady) return;

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
          {commentsListing}
        </CommentsListing>
      </CommentCtn>
    </div>
  );
};

export default PostDetails;
