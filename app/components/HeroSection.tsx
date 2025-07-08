import React from "react";
import { useOutletContext } from "@remix-run/react";
import { IconDownload } from "@tabler/icons-react";
import resume from "~/assets/resume.pdf";
import profileImg from "~/assets/ProfilePic.jpeg";
import bg from "~/assets/bgd.png";


interface ContextType {
  isIntroDone: boolean;
}

const HeroSection: React.FC = () => {
  const { isIntroDone } = useOutletContext<ContextType>();

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-8">
        {/* Profile Image on Left */}
        <div className="w-full md:w-[48%] flex justify-center md:justify-start">
          <img
            src={profileImg}
            alt="Sathvikreddy Dudipala"
            className="rounded-full w-[240px] h-[240px] md:w-[360px] md:h-[360px] object-cover md:mt-6"
          />
        </div>

        {/* Text on Right */}
        <div className="w-full md:w-[52%] text-center md:text-left md:pt-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            Hi, my name is Sathvikreddy Dudipala
          </h1>
          <p className="mt-4 text-base md:text-xl text-zinc-600">
            Full-Stack Developer focused on building scalable systems and
            responsive real-time applications — with an emphasis on performance, clean
            architecture, and user experience
          </p>

          <a href={resume} download="Sathvikreddy_Resume.pdf">
            <button
              className="bg-black dark:bg-zinc-50 w-48 rounded-2xl h-14 relative text-white dark:text-black text-xl font-semibold group mt-6"
              type="button"
            >
              <div className="bg-purple-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                <IconDownload className="w-5 h-5" />
              </div>
              <p className="translate-x-2">Resume</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
