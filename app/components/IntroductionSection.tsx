import React from "react";
import {TextRevealByWord} from "./ui/TextRevealByWord";

const IntroductionSection: React.FC = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto text-center md:text-left mt-10 md:mt-16">
      <TextRevealByWord
        text="I'm a software engineer with 3+ years of experience building scalable backend services, designing RESTful APIs, and creating responsive frontend interfaces. I specialize in Node.js, React, and AWS, and enjoy turning complex requirements into clean, production ready solutions. I’m looking to join a team where I can build meaningful products and push myself technically."
      />
    </div>
  );
};

export default IntroductionSection;
