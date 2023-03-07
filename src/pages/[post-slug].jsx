import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Message from "../components/Message";
import { toast } from "react-toastify";

import { Button } from "../styles/Home.styled";
import { CommentCtn, CommentsListing } from "../styles/Message.styled";

const PostDetails = () => {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  const routeData = route.query;
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const sendCommentHandler = () => {
    console.log("object");
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
          <Button onSubmit={sendCommentHandler}>Send Comment</Button>
        </div>
        <CommentsListing>
          <h2>Comments</h2>
          {/* {allComments.map((comment) => {
            return (
              <div>
                <div>
                  <Image src={} />
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
