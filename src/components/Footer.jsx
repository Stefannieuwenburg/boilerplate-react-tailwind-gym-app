import React from "react";
import { Link } from "react-scroll";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" bg-[#222] rounded-t-3xl">
      <div className=" flex flex-col md:flex-row justify-between md:px-32 px-5 p-5">
        <div className=" w-full md:w-1/4">
          <Link to="/">
            <h1 className=" font-semibold text-2xl text-brightRed">FitZone</h1>
          </Link>
          <p className=" mt-4">
            FitZone is a fitness center. It is
            a gym where quality comes first and the personal click is of great
            importance. For optimal results, use the included fitness guidance.
            Come visit us sometime and we will explain everything to you.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl mt-4">Address</h1>
          <p className=" mt-4">89925 Aubree Square Mumbai 12721</p>
        </div>
        <div>
          <h1 className=" font-medium text-xl mt-4">Contact</h1>
          <div className=" flex flex-row items-center gap-2 mt-4">
            <AiTwotonePhone size={20} />
            <p>0626142085</p>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <AiOutlineMail size={20} />
            <p>FitZone@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center mt-4">
          @copyright developed by{" "}
          <span className=" text-brightRed"> Stefan Nieuwenburg</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
