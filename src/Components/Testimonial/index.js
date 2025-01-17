import React from "react";
import image1 from "./srinivasudu.jpg";
import image2 from "./Murari.jpeg";
import image3 from "./Pragnan.jpeg"
import image4 from "./Shiv.jpeg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonial=[
    {
      id:1,
      name:'Lanka Srinivasudu',
      img: image1,
      review:"A data science enthusiast with expertise in AI-enabled education systems, chess FIDE ranking analysis, and sieve algorithms, dedicated to driving innovation and impactful solutions. Passionate about exploring new technologies to solve complex problems effectively."
    },
    
    {
      id:2,
      name:'Bala Murari',
      img: image2,
      review:"An innovator in technology, passionate about making education systems more accessible and impactful, committed to solving challenges through transformative solutions. Continuously seeking opportunities to contribute to meaningful advancements in the field."
    },
  
    {
      id:3,
      name:'Manam Pragnan',
      img: image3,
      review:"An AI enthusiast focused on leveraging technology to create impactful, user-centric solutions, ensuring seamless experiences across diverse and evolving domains. Dedicated to combining creativity and precision in every project undertaken."
    },

    {
      id:4,
      name:'Shiv Bhardwaj',
      img: image4,
      review:"An undergraduate skilled in C++ and web development, with expertise in Node.js and React.js, blending technical expertise and creativity to build dynamic applications. Striving to continually enhance skills and deliver meaningful contributions."
    },
  ];

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
      <p class="text-4xl font-semibold text-purple-500 pt-12">Testimonial</p>
      {/* <div className="flex justify-center items-center"> */}
      <Slider className="" {...settings}>

        {
          testimonial.map((testimonial)=>(<div key={testimonial.id} className="w-[80%] h-[80%] justify-center items-center gap-8 flex p-9">
          <div className="flex-col w-[80%] h-[80%] p-4 border-purple-500 border-2 gap-5 rounded-[10px]">
            <div className="flex flex-col gap-5">
              <div className="flex justify-center items-center gap-5">
                <div className="w-[120px] h-[100px] float-left rounded-[50%] overflow-hidden">
                  <img src={testimonial.img} className="w-[100%] h-[100%]" />
                </div>
                <div className="w-[100%] h-[40%] justify-center">
                  <div>
                    <p className="font-semibold text-xl">{testimonial.name}</p>
                    <p className="">Full Stack developer</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-justify">{testimonial.review}</p>
              </div>
            </div>
          </div>
        </div>))
        }
        

        

      </Slider>
      {/* </div> */}

    </section>
  );
};


export default index;