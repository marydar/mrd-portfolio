import React from "react";
import Navbar from "./components/navbar/navbar";
import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return <main className="overflow-x-hidden bg-[#060910]" >
    <UpdateFollower
    mouseOptions={{
      backgroundColor:"white",
      zIndex: 999,
      followSpeed: 1.5,
    }}
    >
      <Navbar />
      <Hero />
    </UpdateFollower>
    <UpdateFollower
    mouseOptions={{
      backgroundColor:"black",
      zIndex: 999,
      followSpeed: 1.5,
    }}
    >
      <Services />
      <Footer />
    </UpdateFollower>
  </main>;
};

export default App;