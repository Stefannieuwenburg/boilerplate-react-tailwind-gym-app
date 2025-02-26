import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <div
      id="about"
      className=" min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5"
    >
      <div>
        <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
          About 
        </h1>

        <div className=" w-full md:w-3/4 space-y-5 mt-4">
          <p>
            Fitzone The gym where we welcome you with a smile, we know you as a
            person, we give you positive energy and we encourage you to achieve
            your goals.
          </p>

          <p>
            FitZone is a gym where quality comes first and the personal click is
            of great importance. For optimal results, use the included fitness
            guidance. Come visit us sometime and we will explain everything to
            you.
          </p>
        </div>
      </div>
      <div>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
