import React from "react";
import image1 from "./Datascience course.png";

const Index = () => {
  return (
    <section className="w-screen h-screen bg-purple-100">
      <p className="text-4xl font-semibold text-purple-500 pt-12 p-4">
        Course Details
      </p>
      <div className="flex gap-8 p-4 w-full">
        {/* image Section */}
        <div className="flex justify-center items-center w-[50%] h-[450px] p-3">
          <img
            src={image1}
            alt="Data Science Course"
            className="w-[100%] h-[400px]"
          />
        </div>
        {/* main text section*/}
        <div className="flex flex-col gap-5 w-[50%] p-3">
          <p className="font-semibold flex text-[52px]">
            Data Science Industrial Training Program
          </p>
          <p className="text-justify font-serif text-[23px]">
            Data Science is the process of extracting insights and knowledge
            from data using techniques from statistics, machine learning, and
            programming. It helps in making data-driven decisions by analyzing
            patterns and trends.
          </p>
          {/*button section*/}
          <div className="flex flex-row justify-center gap-[200px]">
            <button className="border-2 text-purple-600 border-purple-600 bg-purple-200 p-2 rounded-md text-[22px] hover:bg-purple-600 hover:text-white cursor-pointer">
              Purchase course
            </button>
            <button className="border-2 p-2 text-white border-purple-600 hover:bg-purple-200 rounded-md text-[22px] bg-purple-600 hover:text-black">
              Book demo
            </button>
          </div>
        </div>
      </div>

      <div class="bg-[white]  border-purple-500 border-[2px] shadow-2xl shadow-purple-400 grid grid-cols-3 mx-5 md:mx-10 p-5 md:p-7 rounded-lg">
        <div class="pr-5 md:pr-7">
          <div class="flex justify-center gap-2.5 items-center">
            <div class="font-bold text-[22px] md:text-3xl">x.x</div>
            <div class="">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                class="text-yellow-500 text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
            </div>
          </div>
          <div class="text-xs md:text-lg text-center font-normal">
            xxK+ Learners enrolled
          </div>
        </div>
        <div class="px-5 md:px-7 text-center border-x">
          <div class="font-bold text-center text-[22px] md:text-3xl">xx+</div>
          <div class="text-xs md:text-lg  font-normal text-center">
            Hours of lectures
          </div>
        </div>
        <div class="text-center">
          <div class="font-bold text-center  text-[22px] md:text-3xl">xx+</div>
          <div class="text-xs md:text-lg  font-normal text-center">
            Projects
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 p-4">
        <div className="w-[100%] border-purple-500 border-[2px]"><p>Advanced</p></div>
        <div className="w-[100%] border-purple-500 border-[2px]"><p>X Months</p></div>
        <div className="w-[100%] border-purple-500 border-[2px]"><p>Real World projects</p></div>
        <div className="w-[100%] border-purple-500 border-[2px]"><p>x Certifications</p></div>
        <div className="w-[100%] border-purple-500 border-[2px]"><p>Don't Miss out - Inquire Now</p></div>
      </div>
    </section>
  );
};

export default Index;
