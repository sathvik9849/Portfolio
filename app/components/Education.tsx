import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { useOutletContext } from "@remix-run/react";

interface ContextType {
  isIntroDone: boolean;
}
const Education: React.FC = () => {
  const { isIntroDone } = useOutletContext<ContextType>();
  const educationDetails = [
    {
      degree: "Masters in Computer Science",
      institution: "Georgia State University",
      location: "Atlanta, GA",
      date: "08/2023 - 05/2025",
      description:"Course Work:  Parallel Algorithms, Machine Learning, Database Systems, Data Mining, \nComputational Intelligence"
    },
    {
      degree: "Bachelors in Computer Science",
      institution: "Indian Institute of Technology (IIT) Indore",
      location: "Indore, India",
      date: "08/2018 - 05/2022",
      description: "Course Work: Data Structures and Algorithms, Software Engineering, Computer Vision, \nOperating Systems, DBMS"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
        {/* Education Timeline Section */}
        <div className="w-full md:w-2/3">
          <div className="relative border-l-4 border-purple-800">
            {educationDetails.map((edu, idx) => (
              <motion.div
                className="mb-8 pl-8"
                key={idx}
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
                <p className="text-sm text-gray-600">{edu.date}</p>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-md font-medium text-purple-500">
                  {edu.institution}, {edu.location}
                </p>
                {edu.description.split("\n").map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span>{point}</span>
                    </div>
                  ))}
                {/* <p className="text-zinc-500">{edu.description}</p> */}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lottie Animation Section */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="scale-[1.5] md:scale-[1.5] origin-center pb-6 md:pb-12">
            <DotLottieReact
              src="https://lottie.host/fbeb6c21-aa1e-4e9d-bfcf-d94393c68fe8/XIcJg8n5io.lottie"
              className="w-full h-auto"
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

export default Education;
