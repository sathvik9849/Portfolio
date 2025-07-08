import React, { useEffect, useState } from "react";
import lodash from "lodash";
import { Flipped, Flipper } from "react-flip-toolkit";
import {
  SiRemix,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiVite,
  SiTailwindcss,
  SiGithub,
  SiAntdesign,
  SiSpringboot,
  SiDocker,
  SiApachekafka,
  SiJenkins,
  SiPostgresql,
  SiRedis,
  SiAngular,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { RiCss3Fill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaNpm, FaAws } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
import { LinkPreview } from "./ui/link-preview";

const Skills: React.FC = () => {
  const skillItems = [
    {
      title: "React",
      icon: <FaReact className="text-blue-500" />,
      link: "https://reactjs.org/",
    },
    {
      title: "Next.js",
      icon: <TbBrandNextjs className="text-black dark:text-white" />,
      link: "https://nextjs.org/",
    },
    {
      title: "Angular",
      icon: <SiAngular className="text-red-600" />,
      link: "https://angular.io/",
    },
    {
      title: "Java",
      icon: <FaJava className="text-red-700" />,
      link: "https://www.java.com/",
    },
    {
      title: "Spring Boot",
      icon: <SiSpringboot className="text-green-600" />,
      link: "https://spring.io/projects/spring-boot",
    },
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-500" />,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      title: "TypeScript",
      icon: <SiTypescript className="text-blue-600" />,
      link: "https://www.typescriptlang.org/",
    },
    {
      title: "HTML5",
      icon: <SiHtml5 className="text-orange-500" />,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      title: "CSS3",
      icon: <RiCss3Fill className="text-blue-500" />,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      title: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      link: "https://nodejs.org/",
    },
    {
      title: "Express",
      icon: <SiExpress className="text-black dark:text-white" />,
      link: "https://expressjs.com/",
    },
    {
      title: "Vite",
      icon: <SiVite className="text-purple-500" />,
      link: "https://vitejs.dev/",
    },
    {
      title: "Remix",
      icon: <SiRemix className="text-cyan-500" />,
      link: "https://remix.run/",
    },
    {
      title: "MongoDB",
      icon: <BiLogoMongodb className="text-green-600" />,
      link: "https://www.mongodb.com/",
    },
    {
      title: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-700" />,
      link: "https://www.postgresql.org/",
    },
    {
      title: "Redis",
      icon: <SiRedis className="text-red-600" />,
      link: "https://redis.io/",
    },
    {
      title: "Docker",
      icon: <SiDocker className="text-blue-400" />,
      link: "https://www.docker.com/",
    },
    {
      title: "AWS",
      icon: <FaAws className="text-orange-500" />,
      link: "https://aws.amazon.com/",
    },
    {
      title: "Kafka",
      icon: <SiApachekafka className="text-black dark:text-white" />,
      link: "https://kafka.apache.org/",
    },
    {
      title: "Jenkins",
      icon: <SiJenkins className="text-red-600" />,
      link: "https://www.jenkins.io/",
    },
    {
      title: "Vercel",
      icon: <CgVercel className="text-black dark:text-white" />,
      link: "https://vercel.com/",
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
      link: "https://tailwindcss.com/",
    },
    {
      title: "GitHub",
      icon: <SiGithub className="text-black dark:text-white" />,
      link: "https://github.com/",
    },
    {
      title: "NPM",
      icon: <FaNpm className="text-red-600" />,
      link: "https://www.npmjs.com/",
    },
  ];

  const [items, setItems] = useState(skillItems);

  // useEffect(() => {
  //   const shuffleInterval = setInterval(() => {
  //     const newShuffledItems = lodash.shuffle(items);
  //     setItems(newShuffledItems);
  //   }, 3000); // Shuffle every 3 seconds

  //   return () => clearInterval(shuffleInterval);
  // }, [items]);

  return (
    <div className="container mx-auto py-12 flex flex-col items-center">
      <Flipper flipKey={items.map((item) => item.title).join("")}>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-6 w-full">
          {items.map((item) => (
            <Flipped key={item.title} flipId={item.title}>
              <div className="w-full p-3 gap-1 flex flex-col justify-center items-center">
                <LinkPreview url={item.link}>
                  <div className="text-4xl mb-2">{item.icon}</div>
                </LinkPreview>
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 text-center">
                  {item.title}
                </h3>
              </div>
            </Flipped>
          ))}
        </div>
      </Flipper>
    </div>
  );
};

export default Skills;
