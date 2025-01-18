import React from "react";
import Hero from "../../Components/Hero";
import Courses from "../../Components/Courses";
import Navbar from "../../Components/Navbar";
import About from "../../Components/About";
import Testimonial from "../../Components/Testimonial";
import Footer from "../../Components/Footer";

const index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Courses />
      <About />
      <Testimonial />
      <coursepage />

    </div>
  );
};

export default index;
