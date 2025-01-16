import React from "react";
import Test from "./WhatsApp Image 2025-01-16 at 02.10.41_8019d8e7.jpg";
const index = () => {
  return (
    <section className=" flex justify-center w-[100%] h-[60vh] bg-purple-50">
      <div className="w-[80%] justify-center items-center gap-8 flex">
        <div className="flex-col w-[40%] h-[80%] p-4 border-purple-500 border-2 gap-5 rounded-[10px]">
          <div className="flex flex-col gap-5">
            <div className="flex justify-center items-center gap-5">
              <div className="w-[120px] h-[100px] float-left rounded-[50%] overflow-hidden">
                <img src={Test} className="w-[100%] h-[100%]" />
              </div>
              <div className="w-[100%] h-[40%] justify-center">
                <div>
                  <p className="font-semibold text-2xl">Lanka Srinivasudu</p>
                  <p className="">Full Stack developer</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-justify">
                I'm a daya secience entushist have done projects on Ai- enabled
                personlised education system, chess-fide ranking, sives of
                erathones I'm a daya secience entushist have done projects on
                Ai- enabled personlised education system, chess-fide ranking,
                sives of erathones I'm a daya secience entushist have done
                projects on Ai- enabled personlised education system, chess-fide
                ranking, sives of erathones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
