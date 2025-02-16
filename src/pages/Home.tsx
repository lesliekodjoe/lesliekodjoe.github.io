import React from "react";

import Hero from "../sections/Hero";
import Project from "../sections/Project";
import Connect from "../sections/Connect";
import Footer from "../components/Footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <Project />
      <Connect />
      <Footer />
    </>
  );
};

export default Home;
