import Head from "next/head";
import Message from "../components/Message";
import { Fragment, useState, useEffect } from "react";

//styles
import { Section, Title } from "../styles/Home.styled";
import { db } from "../utils/firebase";

const HomePage = () => {
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
