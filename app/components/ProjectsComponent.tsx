import { Link } from "@remix-run/react";
import React from "react";
import { SparklesText } from "./ui/SparklesText";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import bgPattern from "../assets/wavy_Background6.png";
import bgPatternDark from "../assets/wavy_Background5.png";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiPostgresql, SiAwsamplify } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaAws, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiFlutter, SiFirebase } from "react-icons/si";

const TypingText = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center gap-[1px]">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: i * 0.1,
            duration: 0.3,
            ease: "easeInOut",
          }}
          viewport={{ once: false }}
          className="text-stone-200 text-xl font-extrabold"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

const ProjectsComponent: React.FC = () => {
  const techIconMap: Record<string, JSX.Element> = {
    FaReact: <FaReact className="text-blue-500 text-2xl" />,
    FaNodeJs: <FaNodeJs className="text-green-600 text-2xl" />,
    HTML: <FaHtml5 className="text-orange-500 text-xl" />,
    CSS: <FaCss3Alt className="text-blue-500 text-xl" />,
    JavaScript: <FaJs className="text-yellow-400 text-xl" />,
    MongoDB: <SiMongodb className="text-green-600 text-xl" />,
    AWS: <FaAws className="text-yellow-500 text-xl" />,
    Flutter: <SiFlutter className="text-blue-400 text-xl" />,
    Firebase: <SiFirebase className="text-yellow-400 text-xl" />,
    PostgreSQL: <SiPostgresql className="text-blue-800 text-xl" />,
  };
  return (
    <>
      <section className="overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 py-20">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-16">
              {[
                {
                  title: "CollabX",
                  url: "projects/1",
                  img: "https://4kwallpapers.com/images/wallpapers/your-name-shooting-3840x2160-14938.jpg",
                  lottie:
                    //"https://lottie.host/acc7331b-ac31-4e2f-b248-2840ad7a823d/Ya5vAN73r8.lottie",
                    //"https://lottie.host/79d40496-50e9-42ab-aa34-f08466d5c093/gGI19cxaMg.lottie",
                    "https://lottie.host/7f6c1ca8-30cc-49c2-bfaf-3ea19f1bba9c/1ZhHp15asp.lottie",
                  description: "Video Conferencing Platfrom.",
                  tools: "HTML\nCSS\nJS",
                  technologies: [
                    "FaNodeJs",
                    "HTML",
                    "CSS",
                    "MongoDB",
                    "JavaScript",
                  ],
                },
                {
                  title: "IITI_GO",
                  url: "projects/2",
                  img: "https://images.unsplash.com/photo-1731286507379-94216c27cf9d?q=80&w=1824",
                  lottie:
                    //"https://lottie.host/79d40496-50e9-42ab-aa34-f08466d5c093/gGI19cxaMg.lottie",
                    "https://lottie.host/7f6c1ca8-30cc-49c2-bfaf-3ea19f1bba9c/1ZhHp15asp.lottie",
                  description:
                    "EV tracking application with real time Geo-Fencing.",
                  tools: "HTML\nCSS\nJS",
                  technologies: ["Flutter", "Firebase", "PostgreSQL", "AWS"],
                },
                {
                  title: "Amazon",
                  url: "projects/3",
                  img: "https://images.unsplash.com/photo-1475598322381-f1b499717dda?q=80&w=1776",
                  lottie:
                    // "https://lottie.host/005406c3-4043-4ad9-bdc7-d358778d1f5e/FBr0SiwMHH.lottie",
                    // "https://lottie.host/fb62f0fb-30de-48dc-bca6-7ab4c59748c4/CcEgjrz93L.lottie",
                    //"https://lottie.host/79d40496-50e9-42ab-aa34-f08466d5c093/gGI19cxaMg.lottie",
                    "https://lottie.host/7f6c1ca8-30cc-49c2-bfaf-3ea19f1bba9c/1ZhHp15asp.lottie",
                  description: "Cloned Interactive Amazon Website.",
                  tools: "HTML\nCSS\nJS",
                  technologies: ["HTML", "CSS", "JavaScript"],
                },
              ].map((proj, i) => (
                <Link
                  key={i}
                  to={proj.url}
                  className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.15] w-[330px] h-[400px]  border border-zinc-400 dark:border-zinc-700"
                  //style={{ backgroundImage: `url('${proj.img}')` }}
                >
                  <img
                    src={bgPattern}
                    alt="Background pattern"
                    className="absolute inset-0 object-cover w-full h-full opacity-95 dark:opacity-0 pointer-events-none"
                  />
                  <img
                    src={bgPattern}
                    alt="Background pattern dark"
                    className="absolute inset-0 object-cover w-full h-full opacity-0 dark:opacity-95 pointer-events-none"
                  />
                  {/* <DotLottieReact
                    src={proj.lottie}
                    autoplay
                    loop
                    className="absolute inset-0 w-full h-full object-cover -translate-y-10"
                  /> */}
                  <div
                    className="absolute top-20 right-0 transform translate-x-5 group-hover:translate-x-0 transition-transform duration-1000 ease-in-out 
             opacity-0 group-hover:opacity-100 
             bg-gray-1000 dark:bg-zinc-750 text-stone-400
             px-3 py-2  shadow-md z-20 w-48
             text-centre"
                  >
                    <p className="text-s font-bold">{proj.description}</p>
                  </div>
                  {/* <div
                    className="absolute bottom-36 left-0 transform -translate-x-5 group-hover:translate-x-0 transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100 
  bg-gray-850 dark:bg-zinc-750 text-purple-500 text-xl sm:text-2xl font-extrabold tracking-wide px-1 -py-4 shadow-md "
                  >
                    Tools
                  </div> */}

                  <div
                    className={`absolute bottom-8 left-0 transform -translate-x-5 group-hover:translate-x-0 transition-transform duration-1000 ease-in-out
                      opacity-0 group-hover:opacity-100 
                      bg-gray-850 dark:bg-zinc-750 text-stone-400
                      px-3 py-2.5 shadow-md z-30 w-20
                      text-left leading-snug 
                      ${
                        proj.technologies.length > 3
                          ? "grid grid-cols-2 gap-3"
                          : "flex flex-col items-center justify-center gap-3"
                      }`}
                  >
                    {proj.technologies.map((tech, index) => (
                      <div key={index}>{techIconMap[tech]}</div>
                    ))}
                  </div>

                  <div className="absolute bottom-0 w-full text-center py-1">
                    <TypingText text={proj.title} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* See All link */}
          <p className="text-center text-lg text-zinc-50 mt-12">
            <Link to="/projects">
              <SparklesText text="See All" />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default ProjectsComponent;
