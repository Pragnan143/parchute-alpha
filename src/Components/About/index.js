import React from "react";
import ceo from './ceo.jpg'
import founder from './founder.jpg'
import member from './member.jpg'
import education from "./education_16675750.gif"
import innovation from './innovation.gif'
import excellence from './excellence.gif'
import integrity from './integrity.gif'

const index = () => {
  return (
    <section className=" h-[100%] px-10 py-4 ">
      <div className="h-[70%] w-full ">
        <p className="text-4xl font-semibold text-purple-500 pt-12">About Us</p>
        <div className="flex flex-col gap-10 justify-start items-start py-10 w-full ">
          <p className="text-4xl font-semibold px-32">Our Team</p>
          <div className="w-full flex gap-10 flex-wrap items-center justify-evenly">
            <div className="flex items-center justify-center w-[200px] h-[200px] bg-slate-100 rounded-full overflow-hidden">
              <img src={founder} alt="founder" />
            </div>
            <div className="flex items-center justify-center w-[200px] h-[200px] bg-slate-100 rounded-full overflow-hidden">
              <img src={ceo} alt="ceo"/>
            </div>
            <div className="flex items-center justify-center w-[200px] h-[200px] bg-slate-100 rounded-full overflow-hidden">
              <img src={member} alt="member" />
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-evenly items-center py-16 w-full bg-purple-50 rounded-2xl  ">
          <p className="text-4xl font-semibold w-[28%] content-start">
            Our Vision and
            <br /> <span className=" text-purple-500">Mission</span>
          </p>
          <p className="text-xl  w-[60%] px-4 text-justify">
          Empowering minds, one course at a time. At Pursuit Technologies, we are redefining 
          the way people learn by offering live, interactive courses that make education accessible, 
          engaging, and impactful. Our mission is clear: to connect passionate educators with eager 
          learners, creating a community where knowledge thrives. Join us to explore a world of 
          endless learning possibilities. Pursue your dreams with Pursuit Technologies—where education meets innovation.
          </p>
        </div>
      </div>
      <div className="h-[30%] w-full flex flex-col gap-10 pt-10 ">
        <p className="text-4xl font-semibold w-[30%]">Our Core Values</p>

        <div className="flex gap-10 flex-wrap items-center justify-evenly h-full w-full">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center w-[150px] h-[150px] bg-purple-200 rounded-full">
              <img src={education} alt="" />
            </div>
            <p className="text-xl">Education</p>
          </div>{" "}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center w-[150px] h-[150px] bg-purple-200 rounded-full">
              <img src={innovation} alt="innovation" />
            </div>
            <p className="text-xl">Innovation</p>
          </div>{" "}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center w-[150px] h-[150px] bg-purple-200 rounded-full">
              <img src={excellence} alt="excellence" />
            </div>
            <p className="text-xl">Excellence</p>
          </div>{" "}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center w-[150px] h-[150px]  rounded-full overflow-hidden">
              <img src={integrity} alt="integrity" />
            </div>
            <p className="text-xl">Integrity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
