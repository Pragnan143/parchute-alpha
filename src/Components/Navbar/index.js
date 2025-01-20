import React from "react";
import {NavLink} from 'react-router-dom'
const index = () => {
  return (
    <div className="h-[60px] w-full bg-purple-500 flex gap-8 justify-between items-center p-6 ">
      <div className="font-serif text-[20px]">Pursuit Technologies</div>
      <div className="w-[50%] flex items-center justify-between">
        <div className="flex gap-3 justify-evenly w-[70%] font-medium text-white ">
         <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/aboutus">About Us</NavLink>
          <NavLink to="testimonials">Testinomials</NavLink>
        </div>
        <div className="flex gap-6">
          <div className="h-10 w-28 bg-white  flex items-center justify-center rounded-md">
            <NavLink to="/auth/login">Login</NavLink>
          </div>
          <div className="h-10 w-28 bg-white  flex items-center justify-center rounded-md">
            <NavLink to="/auth/signup">Sign Up</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
