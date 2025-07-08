import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaAws, FaJs } from "react-icons/fa";
import {
  SiPostgresql,
  SiAwsamplify,
  SiSpringboot,
  SiJunit5,
  SiJirasoftware,
  SiExpress,
  SiJenkins,
  SiDocker,
  SiJest,
  SiApachekafka,
} from "react-icons/si";
import { useOutletContext } from "@remix-run/react";

interface ContextType {
  isIntroDone: boolean;
}

const Timeline: React.FC = () => {
  const { isIntroDone } = useOutletContext<ContextType>();
  const techIconMap: Record<string, JSX.Element> = {
    FaReact: <FaReact className="text-blue-500 text-2xl" />,
    FaNodeJs: <FaNodeJs className="text-green-600 text-2xl" />,
    FaJava: <FaJava className="text-red-700 text-2xl" />,
    FaAws: <FaAws className="text-orange-500 text-2xl" />,
    SiPostgresql: <SiPostgresql className="text-blue-800 text-2xl" />,
    SiAwsamplify: <SiAwsamplify className="text-yellow-500 text-2xl" />,
    SiSpringboot: <SiSpringboot className="text-green-600 text-2xl" />,
    SiJunit5: <SiJunit5 className="text-orange-600 text-2xl" />,
    SiJirasoftware: <SiJirasoftware className="text-blue-600 text-2xl" />,
    SiExpress: <SiExpress className="text-black dark:text-white text-2xl" />,
    SiJenkins: <SiJenkins className="text-red-600 text-2xl" />,
    SiDocker: <SiDocker className="text-blue-400 text-2xl" />,
    SiJest: <SiJest className="text-pink-600 text-2xl" />,
    SiApachekafka: <SiApachekafka className="text-black dark:text-white text-2xl" />,
    FaJavaScript: <FaJs className="text-yellow-400 text-xl" />,
  };
  const techLabelMap: Record<string, string> = {
    FaReact: "React",
    FaNodeJs: "Node.js",
    FaJava: "Java",
    FaAws: "AWS",
    SiPostgresql: "PostgreSQL",
    SiAwsamplify: "AWS Amplify",
    SiSpringboot: "Spring Boot",
    SiJunit5: "JUnit 5",
    SiJirasoftware: "Jira",
    SiExpress: "Express.js",
    SiJenkins: "Jenkins",
    SiDocker: "Docker",
    SiJest: "Jest",
    SiApachekafka: "Kafka",
    FaJavaScript: "Javascript"
  };

  const experiences = [
    {
      title: "Full Stack Engineer - Graduate Research Assistant",
      company: "Georgia State University - Health Informatics Research Group",
      location: "",
      date: "08/2023 - 05/2025",
      description:
        "Integrated Exact Sciences portal with Epic web system via OAuth 2.0 redirection, enabling secure auto-transfer of patient data and reducing data entry time for physicians by 70%.\nLed backend development of the integration, implementing secure token exchange, RESTful patient data retrieval, and sub-200ms delivery of prefilled data for rendering using Java and Spring Boot.\nEngineered role-based access control (RBAC) using JWT to restrict patient and test order data by physician role, eliminating unauthorized access and safeguarding 100+ daily sessions.\nCrafted React components using Formik and Yup to render and validate Epic-prefilled patient forms, minimizing manual input by 3× and improving accuracy by 40%.\nCollaborated in an Agile environment, using JIRA to manage sprint tasks and deliver Epic integration features aligned with release timelines.",
      technologies: [
        "FaReact",
        "SiPostgresql",
        "FaJava",
        "SiSpringboot",
        "SiJunit5",
        "SiJirasoftware",
      ],
    },
    {
      title: "Software Development Engineer",
      company: "Jio Platforms Limited",
      location: "",
      date: "06/2022 - 07/2023",
      description:
        "Engineered a scalable coupon generation system using Node.js and Express.js, allowing clients to personalize and generate up to 10M unique coupons per request.\nOptimized storage and retrieval for over 50M coupon records in PostgreSQL by applying indexing strategies, lowering average query time from 1.2s to 400ms.\nCollaborated with DevOps team to deploy Dockerized microservices on AWS Fargate, handling processing of 1M+ coupon requests on a regular basis while maintaining 99.9% uptime.\nBuilt CI/CD pipelines using Jenkins to automate Docker-based builds, JUnit-based unit tests, and deployments on AWS Fargate, accelerating release cycles by 70% and boosting deployment reliability.",
      technologies: [
        "FaJavaScript",
        "FaNodeJs",
        "SiExpress",
        "SiPostgresql",
        "FaAws",
        "SiDocker",
        "SiJenkins",
        "SiJest",
      ],
    },
    {
      title: "Software Development Engineer Intern",
      company: "Jio Platforms Limited",
      location: "",
      date: "01/2022 - 05/2022",
      description: "Developed the full-stack for Automator.AI, a No-Code NLP Automation Tool, using React, Node.js, and Express.js, enabling scalable and efficient test execution for UI and API testing.\nDesigned and integrated parallel processing pipelines leveraging Kafka, lowering API and UI test execution time by 60% through concurrent test runs.\nImplemented a standalone inbound Email/SMS server using Haraka SMTP, reducing external dependencies by 90% and enhancing reliability of communication workflows.",
      technologies: ["FaJavaScript", "FaReact", "FaNodeJs", "SiExpress", "SiApachekafka"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-20">
        {/* Timeline Section */}
        <div className="w-full md:w-2/3">
          <div className="relative border-l-4 border-purple-800">
            {experiences.map((experience, idx) => (
              <motion.div
                key={idx}
                className="mb-8 pl-8"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: idx * 0.2,
                }}
                viewport={{ once: true }}
              >
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9.5px] mt-1" />
                <p className="text-sm text-gray-600">{experience.date}</p>
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p className="text-md font-medium text-purple-500">
                  {experience.company} {experience.location}
                </p>

                {/* Bullet Points */}
                <div className="text-zinc-500 mt-2 space-y-1">
                  {experience.description.split("\n").map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-purple-500 text-lg leading-6">
                        •
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Icons */}
                {experience.technologies && (
                  <div className="flex items-center flex-wrap gap-4 mt-4">
                    <span className="font-medium text-purple-500">
                      Tools & Technologies:
                    </span>
                    {experience.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="relative group cursor-pointer"
                      >
                        {techIconMap[tech]}
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 scale-0 group-hover:scale-100 transition-transform bg-zinc-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                          {techLabelMap[tech] || tech}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animation Section */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="scale-[2] md:scale-[2] origin-center">
            <DotLottieReact
              src="https://lottie.host/10e1a356-a27c-4dfc-a05c-aff1234db578/NLK4ZnUTbM.lottie"
              className="w-[280px] h-[280px] md:w-[300px] md:h-[300px]"
              loop
              autoplay
              key={isIntroDone ? 1 : 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
