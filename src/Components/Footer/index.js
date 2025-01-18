import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa6";

const index = () => {
  return (
    <section className="h-[50vh] w-full p-10 bg-purple-600 flex justify-between items-center gap-20 text-white">
      <div className="w-[30%] h-[70%] flex flex-col items-center justify-between">
        <div className=" h-[40%]  flex items-center justify-center font-extrabold text-4xl">
          Parchuite Future
        </div>
        <div className="flex flex-col items-center justify-evenly h-[60%]">
          <div className="w-[80%] text-justify">
            Purchute Future Pvt Ltd, 64, 27th Main Road 1st Sector, HSR Layout
            Hustlehub Techpark,36/5, Somasundrapalya, harlurkunte, village,
            Bengaluru, Karnataka 560102
          </div>
          <div className="flex flex-col justify-center gap-2">
            <p>+91 XXXXXXXXXX</p>
            <p>XXXXX@EMAIL.COM</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start   w-[70%] px-10 py-10 h-full gap-5">
        <div className="h-[70%] w-[400px] flex flex-col items-start justify-between text-white">
          <p className="font-semibold text-xl text-white ">Company</p>{" "}
          <a href="#">
            {" "}
            <p>Home</p>
          </a>
          <a href="#">
            {" "}
            <p>Courses</p>
          </a>{" "}
          <a href="#">
            {" "}
            <p>About Us</p>
          </a>
          <a href="#">
            {" "}
            <p>Testimonials</p>
          </a>
        </div>
        <div className="h-[70%] w-[400px] flex flex-col items-start justify-between text-white ">
          <p className="font-semibold text-xl text-white">Useful Links</p>
          <p>Privacy Policy</p>
          <p>Terms& Conditions</p>
          <p>Return Policy</p>
        </div>
        <div className="h-[30%] w-[400px] flex flex-col items-start justify-between text-white">
          <p className="font-semibold text-xl text-white">Social</p>
          <div className="flex justify-between items-center w-[300px] text-2xl">
            <FaInstagram className="hover:scale-150 cursor-pointer	" />{" "}
            <FaFacebook className="hover:scale-150 cursor-pointer" />{" "}
            <FaTwitter className="hover:scale-150 cursor-pointer" />
            <FaLinkedinIn className="hover:scale-150 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
