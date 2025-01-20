import React from "react";
const index = () => {
  return (
    <div className="h-[60px] w-full bg-purple-100 flex gap-8 justify-between items-center p-6 ">
      <div className="font-serif text-[25px] pt-4">Pursuit Technologies</div>
      <div className="w-[70%] flex items-center justify-between pt-4">
        <div className="flex bg-white shadow-2xl shadow-purple-300  hover:bg-slate-50 p-3 gap-3 justify-evenly w-[60%] font-medium text-black rounded-[17px] border-2 border-purple-600">
          <a className="text-[18px]  hover:text-purple-600 hover:duration-300 " href="#">Home</a>
          <a className="text-[18px]  hover:text-purple-600  hover:duration-300" href="#">Courses</a>
          <a className="text-[18px] hover:text-purple-600  hover:duration-300" href="#">About Us</a>
          <a className="text-[18px]  hover:text-purple-600  hover:duration-300" href="#">Testinomials</a>
        </div>
        <div className="flex gap-6">
          <div className="h-10 text-[18px]  cursor-pointer w-28 text-white hover:duration-300 bg-purple-600  flex items-center justify-center rounded-md hover:bg-purple-200 hover:text-black hover:border-purple-400 hover:border-2">
            <p>Login</p>
          </div>
          <div className="h-10 text-[18px]  hover:bg-purple-600 cursor-pointer hover:duration-300 w-28 bg-white border-2 border-purple-400  flex items-center justify-center rounded-md hover:text-white">
            <p>Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
