/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ProjectType } from "~/models/project.server";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export default function ProjectDetails({
  projectData,
}: {
  projectData: ProjectType;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current?.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen text-zinc-800 dark:text-zinc-200 py-12 px-4 lg:px-24"
    >
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden rounded-lg mb-8">
        <img
          src={projectData?.mainImage}
          alt={projectData?.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {projectData?.title}
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-8 justify-center mb-8">
          {/* <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            About the Project
          </h2> */}
          {projectData?.link && (
            <a
              href={projectData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
            >
              <FaGlobe className="text-2xl" />
            </a>
          )}

          {projectData?.github && (
            <a
              href={projectData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
          )}
        </div>

        {/* Render each section in the description */}
        {projectData?.description?.map((section, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-semibold mb-2 text-purple-500">
              • {section?.title}
            </h3>
            {section?.content && (
              <p className="text-lg leading-relaxed mb-4 text-black dark:text-white pl-4">
                {section?.content}
              </p>
            )}
            {section?.list && (
              <ul className="list-disc list-inside ml-2 space-y-2 text-zinc-500 pl-4">
                {section?.list?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Technologies Used */}
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">
          Tools and Technologies Used
        </h3>
        <div className="flex flex-wrap gap-3 mb-8">
          {projectData?.techstack.map((tech, index) => (
            <span
              key={index}
              className="bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg transition transform hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Image Gallery */}
        {projectData?.image && projectData?.image.length > 0 ? (
          <>
            <h3 className="text-2xl font-semibold mb-4">Image Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
              {projectData?.image.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={image}
                    alt={`${projectData?.title} image ${index + 1}`}
                    className="w-full max-h-[500px] object-contain transform transition duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </>
        ) : null}

        {/* Call to Action Buttons */}
      </div>
    </div>
  );
}
