import React from "react";
import Navbar from "./components/navbar/navbar";
import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";

const App = () => {
  return <main className="overflow-x-hidden">
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
    <Services />
  </main>;
};

export default App;