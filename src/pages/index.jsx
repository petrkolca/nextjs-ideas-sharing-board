import Head from "next/head";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../utils/firebase";
import Message from "../components/Message";
import { RiMessage2Line } from "react-icons/ri";

//styles
import { Section, Title } from "../styles/Home.styled";
import { UtilsCtn } from "../styles/Message.styled";

const HomePage = () => {
  // Create a state with all the POSTS
  const [allPosts, setAllPosts] = useState([]);

  // retrieving all posts from the database
  const getPosts = async () => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllPosts(
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
  };

  useEffect(() => {
    getPosts();
    console.log("all posts are listed: ", allPosts);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Homepage | Post Ideas - Sharing Board</title>
        <meta name="description" content="" />
      </Head>

      <Section>
        <Title>See what other people are saying</Title>
        {allPosts.map((post) => (
          <Message key={post.id} {...post} >
            <UtilsCtn>
              <Link href={{ pathname: `/${post.id}`, query: { ...post } }}>
                <button tabIndex="-1">
                  <RiMessage2Line />
                  {post.comments?.length === 1
                    ? `View ${post.comments?.length} Comment`
                    : null}
                  {post.comments?.length > 1
                    ? `View all ${post.comments?.length} Comments`
                    : `0 Comments`}
                </button>
              </Link>
            </UtilsCtn>
          </Message>
        ))}
      </Section>
    </Fragment>
  );
};

export default HomePage;
