import Link from "next/link";
import { useRouter } from "next/router";
import { auth, db } from "../utils/firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect, useCallback } from "react";
import Message from "../components/Message";
import { RiEditLine } from "react-icons/ri";
import { IoTrashBinOutline } from "react-icons/io5";
import { Button } from "../styles/Home.styled";
import { UtilsCtn } from "../styles/Message.styled";

const Dashboard = () => {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [allUserPosts, setAllUserPosts] = useState([]);

  // check if the user is LOGGED-IN
  const getData = useCallback(async () => {
    // console.log("user test: ", user);

    if (loading) return;
    // if not logged-in send user to Loggin page
    if (!user) return route.push("/auth/login");

    // Get all posts from the database
    const collectionRef = collection(db, "posts");
    const q = query(
      collectionRef,
      // check if posts are from the same user is logged-in
      where("user", "==", user.uid),
      orderBy("timestamp", "desc")
    );

    // list all posts from the snaphshot
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllUserPosts(
        // map through eall document in the collection
        snapshot.docs.map((doc) => {
          // return object of all posts
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });

    return unsubscribe;
  }, [loading, route, user]);

  // DELETE Post
  const deletePostHandler = async (id) => {
    // deleting Reference of document
    const docRef = doc(db, "posts", id);
    await deleteDoc(docRef);
  };

  const signOutHandler = async () => {
    await auth.signOut();
  };

  useEffect(() => {
    getData();
  }, [user, loading, getData]);

  return (
    <div>
      <h1>Your Posts</h1>
      <div>
        {allUserPosts.map((post) => (
          <Message key={post.id} {...post}>
            <UtilsCtn edit>
              <button
                className="btn-delete"
                onClick={() => deletePostHandler(post.id)}
              >
                <IoTrashBinOutline />
                Delete
              </button>
              <Link href={{ pathname: "/post", query: post }}>
                <button tabIndex="-1">
                  <RiEditLine />
                  Edit
                </button>
              </Link>
            </UtilsCtn>
          </Message>
        ))}
      </div>
      <Button className="mt-4" onClick={signOutHandler}>Sign out</Button>
    </div>
  );
};

export default Dashboard;
