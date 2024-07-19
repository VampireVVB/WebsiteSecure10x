import React from "react";
import { myImg } from "../Assests/images";
import { s200 } from "../Assests/sampleText";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <h2 className="my-20 text-center text-4xl">
        about
        <span className="text-neutral-500"> the course</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={myImg} alt="about image" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{s200}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;