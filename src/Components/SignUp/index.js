import React from "react";
import { FcGoogle } from "react-icons/fc";

const index = () => {
  return (
    <div class="flex  justify-center items-center h-screen ">
      <div class="flex flex-col items-center bg-purple-200 rounded-[10px] border-2 border-purple-400">
        <form class="flex flex-col gap-10 bg-purple-100 p-10 border-2 w-[600px] rounded-md ">
          <h1 className="font-serif text-[30px]">Register</h1>
          <div className="flex flex-col">
            <input
              required
              className="border-2 p-2 rounded-lg"
              type="text"
              placeholder="Enter your UserName"
            />
          </div>
          <div className="flex flex-col">
            <input
              required
              className="border-2 p-2 rounded-lg"
              type="email"
              placeholder="Enter your Email"
            />
          </div>

          <div className="flex flex-col">
            <input
              required
              className="border-2 p-2 rounded-lg "
              type="password"
              placeholder="Enter your Password"
            />
          </div>

          <div className="flex flex-col">
            <div
              type="submit"
              class=" border-2 text-purple-600 border-purple-600 bg-purple-200 p-2 rounded-md text-[20px] h-auto w-auto  hover:bg-purple-600 hover:text-white cursor-pointer "
            >
              Register
            </div>
            <a href="" className="flex text-slate-500">
              Login
            </a>
          </div>

          <div class="flex flex-col gap-4">
            <p>or</p>
            <div
              type="submit"
              class=" flex items-center justify-center gap-5 border-2 text-purple-600 border-purple-600 bg-purple-200 p-2 rounded-md text-[20px] h-auto w-auto  hover:bg-purple-600 hover:text-white cursor-pointer "
            >
              <FcGoogle /> Sign with Google
            </div>
            {}
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
