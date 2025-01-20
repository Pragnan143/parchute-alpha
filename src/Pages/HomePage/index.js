import React from "react";
import Hero from "../../Components/Hero";
import Courses from "../../Components/Courses";
import Navbar from "../../Components/Navbar";
import About from "../../Components/About";
import Testimonial from "../../Components/Testimonial";
import Courseorder from "../../Components/Coursedetail";

const index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <About />
      <Testimonial />
      <Courseorder/>
    </div>
  );
};

export default index;
