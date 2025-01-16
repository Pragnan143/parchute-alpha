import React from "react";
import Test from "./WhatsApp Image 2025-01-16 at 02.10.41_8019d8e7.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const index = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="flex-col  w-screen bg-purple-50 p-10 gap-10">
      <p class="text-4xl p-4 text-purple-600 text-center">Testimonial</p>
      {/* <div className="flex justify-center items-center"> */}
      <Slider className="" {...settings}>

        <div className="w-[80%] h-[80%] justify-center items-center flex p-9">
          <div className="flex-col w-[80%] h-[80%] p-4 border-purple-500 border-2 gap-5 rounded-[10px]">
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

        <div className="w-[80%] h-[80%] justify-center items-center gap-8 flex p-9">
          <div className="flex-col w-[80%] h-[80%] p-4 border-purple-500 border-2 gap-5 rounded-[10px]">
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

        <div className="w-[80%] h-[80%] justify-center items-center gap-8 flex p-9">
          <div className="flex-col w-[80%] h-[80%] p-4 border-purple-500 border-2 gap-5 rounded-[10px]">
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

      </Slider>
      {/* </div> */}
    </section>
  );
};

export default index;
