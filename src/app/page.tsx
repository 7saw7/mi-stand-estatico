import React from "react";
import Hero from "src/components/Hero";
import Service from "src/components/Service/page";
import AboutSection from "src/components/AboutSection/page";
const Home: React.FC = () => {

  return (
    <>

        <Hero />
        <Service />
        <AboutSection />
    </>
  );
};

export default Home;
