import React from "react";
const index = () => {
  return (
    <div className="h-[60px] w-full bg-purple-500 flex gap-8 justify-between items-center p-6 ">
      <div className="font-serif text-[20px]">Pursuit Technologies</div>
      <div className="w-[50%] flex items-center justify-between">
        <div className="flex gap-3 justify-evenly w-[70%] font-medium text-white ">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">About Us</a>
          <a href="#">Testinomials</a>
        </div>
        <div className="flex gap-6">
          <div className="h-10 w-28 bg-white  flex items-center justify-center rounded-md">
            <p>Login</p>
          </div>
          <div className="h-10 w-28 bg-white  flex items-center justify-center rounded-md">
            <p>Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
