import Head from "next/head";
import Message from "../components/Message";
import { Fragment, useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../utils/firebase";

//styles
import { Section, Title } from "../styles/Home.styled";

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
          return { ...doc.data() };
        })
      );
    });

    return unsubscribe;
  };

  useEffect(() => {
    console.log("all posts are listed: ", allPosts);
  }, [allPosts]);

  return (
    <Fragment>
      <Head>
        <title>Homepage | Post Ideas - Sharing Board</title>
        <meta name="description" content="" />
      </Head>

      <Section>
        <Title>See what other people are saying</Title>
        <Message />
      </Section>
    </Fragment>
  );
};

export default HomePage;
