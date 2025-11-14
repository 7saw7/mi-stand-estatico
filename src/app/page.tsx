import React from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Hero from "src/components/Hero";
import Service from "src/components/Service/page";
import AboutSection from "src/components/AboutSection/page";
const Home: React.FC = () => {

  return (
    <>

      <Header />
        <Hero />
        <Service />
        <AboutSection />
      <Footer />
    </>
  );
};

export default Home;
