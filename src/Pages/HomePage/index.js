import React from "react";
import Hero from "../../Components/Hero";
import Courses from "../../Components/Courses";
import Navbar from "../../Components/Navbar";
import About from "../../Components/About";
import Testimonial from "../../Components/Testimonial";

const index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <About />
      <Testimonial />
    </div>
  );
};

export default index;
