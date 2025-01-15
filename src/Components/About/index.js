import React from "react";

const index = () => {
  return (
    <section className=" h-[100%] px-10 py-4 ">
      <div className="h-[70%] w-full ">
        <p className="text-4xl font-semibold text-purple-500 pt-12">About Us</p>
        <div className="flex flex-col gap-10 justify-start items-start py-10 w-full ">
          <p className="text-4xl font-semibold px-32">Our Team</p>
          <div className="w-full flex gap-10 flex-wrap items-center justify-evenly">
            <div className="flex items-center justify-center w-[200px] h-[200px] bg-slate-100 rounded-full">
              <img src="" alt="" />
            </div>
            <div className="flex items-center justify-center w-[200px] h-[200px] bg-slate-100 rounded-full">
              <img src="" alt="" />
            </div>
            <div className="flex items-center justify-center w-[200px] h-[200px] bg-slate-100 rounded-full">
              <img src="" alt="" />
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-10 justify-evenly items-center py-16 w-full bg-purple-50 rounded-2xl  ">
          <p className="text-4xl font-semibold w-[28%] content-start">
            Our Vision and
            <br /> <span className=" text-purple-500">Mission</span>
          </p>
          <p className="text-xl  w-[60%] px-4 text-justify">
            ontrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          </p>
        </div>
      </div>
      <div className="h-[30%] w-full flex flex-col gap-10 pt-10 ">
        <p className="text-4xl font-semibold w-[30%]">Our Core Values</p>

        <div className="flex gap-10 flex-wrap items-center justify-evenly h-full w-full">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center w-[150px] h-[150px] bg-purple-200 rounded-full">
              <img src="" alt="" />
            </div>
            <p className="text-xl">Key Names</p>
          </div>{" "}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center w-[150px] h-[150px] bg-purple-200 rounded-full">
              <img src="" alt="" />
            </div>
            <p className="text-xl">Key Names</p>
          </div>{" "}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center w-[150px] h-[150px] bg-purple-200 rounded-full">
              <img src="" alt="" />
            </div>
            <p className="text-xl">Key Names</p>
          </div>{" "}
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center w-[150px] h-[150px] bg-purple-200 rounded-full">
              <img src="" alt="" />
            </div>
            <p className="text-xl">Key Names</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
