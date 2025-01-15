import React from "react";
import Image from "./hero.jpg";
const index = () => {
  return (
    <section class="bg-purple-100 h-[70vh] flex flex-col justify-between w-screen">
      <div class="flex w-[100%] pt-12">
        <div class="flex flex-col justify-center gap-10 w-[60%]">
          <h1 class="text-[35px]  font-serif" >Upskill for Tomorrow’s Careers Today</h1>
          <p class="text-[20px] font-medium font-serif " > Gain in-demand skills 
          with expert-led courses.
            <br/>Stand out in the job market and accelerate your
             career growth.
          </p>

          <div class="flex flex-row justify-center gap-[50px]">
            <div class=" border-2 text-purple-600 border-purple-600 bg-purple-200 p-2 rounded-md text-[20px] h-auto w-auto  hover:bg-purple-600 hover:text-white ">
              <p>Get Started</p>
            </div>
            <div class="border-2 p-2 text-white border-purple-600 hover:bg-purple-200 rounded-md text-[20px] h-auto w-auto bg-purple-600 hover:text-black ">{" "}
              <p>Explore</p>{" "}
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-center w-[450px] h-[450px] p-4">
          <img
            className="h-[100%] w-[100%] flex flex-col rounded-md"
            src={Image}
            alt="ed tech image"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
