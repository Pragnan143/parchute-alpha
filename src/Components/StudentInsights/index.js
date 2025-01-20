import React from "react";
import StudentImg from "../../Assets/Student.png";
const index = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full justify-evenly pt-40 ">
        <div className="flex flex-col  justify-evenly gap-6">
          <div
            className="flex items-center justify-center p-5 w-[400px]  h-[25%] hover:border-2 drop-shadow-xl

 hover:border-purple-900 bg-purple-200 rounded-lg hover:scale-110	transistion-all"
          >
            <p>
              At the heart of our platform is the belief that education
              transforms lives. We continuously work to make learning
              accessible, impactful, and inspiring for everyone.
            </p>
          </div>
          <div className="flex items-center justify-center drop-shadow-xl p-5 w-[500px] h-[45%] hover:border-2 hover:border-purple-900  bg-purple-200 rounded-lg 	hover:scale-110 transistion-all">
            <p className="text-xl">
              Guided by honesty, transparency, and strong ethical values, we aim
              to build trust with our learners, educators, and partners,
              fostering a community of shared respect
            </p>
          </div>
        </div>
        <div className="flex justify-evenly flex-col items-center ">
          <img
            src={StudentImg}
            alt="student"
            className="hover:rotate-2 transistion-all z-1"
          />
          <div className="w-[180px] h-[10px] bg-slate-700 rounded-4xl blur-lg"></div>
        </div>
        <div className="flex flex-col gap-6">
          {" "}
          <div className="flex items-center justify-center drop-shadow-xl p-5 w-[450px] h-[30%] hover:border-2 hover:border-purple-900  bg-purple-200 rounded-lg hover:scale-110 transistion-all">
            <p className="text-lg">
              Empowering minds with knowledge is our mission. We believe
              education is the cornerstone of progress, enabling individuals to
              achieve their dreams and make a meaningful impact on the world
            </p>
          </div>{" "}
          <div className="flex items-center justify-center drop-shadow-xl p-5 w-[450px] h-[30%] hover:border-2 hover:border-purple-900  bg-purple-200 rounded-lg 	hover:scale-110 transistion-all">
            <p className="text-lg">
              {" "}
              Driving change through creativity and technology. We embrace
              forward-thinking ideas and innovative solutions to revolutionize
              the way we learn and grow
            </p>
          </div>
          <div className="flex items-center justify-center drop-shadow-xl p-5 w-[450px] h-[30%] hover:border-2 hover:border-purple-900  bg-purple-200 rounded-lg hover:scale-110 transistion-all">
            <p className="text-lg">
              Striving for the highest standards in everything we do. Our
              commitment to quality ensures that learners receive unparalleled
              resources and support on their journey to success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
