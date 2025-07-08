import npm from "~/assets/npm.png";
import collabx from "~/assets/collabx_dp.png";
import amazon1 from "~/assets/amazon1.png";
import amazon2 from "~/assets/amazon2.png";

export interface ProjectType {
  id: number;
  title: string;
  name: string;
  description: DescriptionSection[]; // Updated to array of sections
  mainImage: string;
  price?: number;
  image?: string[];
  techstack: string[];
  link?: string;
  github?: string;
  alt?: string;
  colSpan?: string;
  rowSpan?: string;
}

export interface DescriptionSection {
  title?: string;
  content?: string;
  list?: string[];
}

const products: ProjectType[] = [
  {
    id: 1,
    title: "CollabX",
    name: "CollabX",
    alt: "CollabX Video Conferencing Platform",
    description: [
      {
        title: "Project Overview",
        content:
          "CollabX is a full-featured video conferencing platform built to support seamless real-time collaboration for users across different domains.",
        list: [
          "Built a scalable backend using Node.js and Express with MongoDB and Redis for data persistence and caching.",
          "Designed and implemented role-based access for users to securely manage profiles, meetings, and chat features.",
          "Integrated Google Analytics for platform usage tracking and performance insights.",
        ],
      },
      {
        title: "Core Features",
        content:
          "CollabX includes all key functionalities required for modern team collaboration:",
        list: [
          "Real-Time Video Conferencing: Implemented WebRTC for peer-to-peer video streaming and audio communication.",
          "Live Chat: Enabled real-time messaging within video rooms using WebSockets and Socket.io.",
          "Whiteboard: Developed an interactive whiteboard using HTML5 Canvas for collaborative sketching and annotation.",
          "Meeting Scheduler: Added scheduling and history features with RESTful APIs and calendar view integration.",
          "Responsive Dashboard: Created a modern, responsive UI with user profile management and meeting tools.",
        ],
      },
      {
        title: "Security & Performance",
        content:
          "Focused heavily on securing user data and optimizing system performance.",
        list: [
          "Authentication: Implemented JWT-based authentication for secure login and token refresh.",
          "Caching: Used Redis to cache user sessions and reduce database load.",
          "Data Protection: Followed best practices for input validation, session handling, and encryption.",
        ],
      },
      {
        title: "Technical Highlights",
        content:
          "Built with a modern, modular tech stack to ensure scalability and maintainability.",
        list: [
          "Socket.io: For real-time chat and room state synchronization.",
          "WebRTC: For video/audio conferencing between clients.",
          "HTML5 Canvas: For collaborative whiteboard interactions.",
          "RESTful APIs: Built modular endpoints for meeting scheduling, user profiles, and activity history.",
        ],
      },
    ],
    mainImage:
      "https://4kwallpapers.com/images/wallpapers/your-name-shooting-3840x2160-14938.jpg",
    image: [collabx], // Replace with your screenshots
    techstack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "WebRTC",
      "Socket.io",
    ],
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
    link: "https://collab-x-wheat-one.vercel.app/",
    github: "https://github.com/sathvik9849/CollabX",
  },
  {
    id: 2,
    title: "IITI_GO",
    alt: "iiti_go",
    name: "IITI_GO EV Tracker App",
    description: [
      {
        title: "Project Overview",
        content:
          "IITI_GO is a cross-platform mobile super app developed using Flutter for tracking and managing electric vehicles (EVs) used for student transportation at IIT Indore. The app provides real-time schedule visibility, route monitoring, and location-based intelligence to improve campus mobility.",
        list: [
          "Built with Flutter to support both Android and iOS platforms.",
          "Focused on solving last-mile commute issues for students using electric vehicles.",
          "Designed for both students (frontend app) and admin operators (backend dashboard).",
        ],
      },
      {
        title: "Architecture & Infrastructure",
        content:
          "Built on a scalable cloud-native architecture for performance and reliability.",
        list: [
          "Hosted backend computations on AWS LightSail using a Virtual Private Cloud (VPC) setup.",
          "Used Firebase for mobile authentication and Firestore (NoSQL) for testing purposes.",
          "Primary data storage handled by MySQL for structured data management.",
        ],
      },
      {
        title: "Real-Time Tracking System",
        content:
          "Integrated geofencing and live GPS tracking using open-source tooling:",
        list: [
          "Used Traccar (open-source GPS tracking server) installed on a self-managed Ubuntu-based VPC to gather EV telemetry.",
          "Geo-fencing logic used to predict the route each electric vehicle follows during scheduled operations.",
          "Live EV locations and route deviations monitored from the admin console.",
        ],
      },
      {
        title: "Key Features",
        content:
          "The app offers a complete transportation management experience, combining user-friendly design with real-time capabilities.",
        list: [
          "Schedule display for electric vehicles with real-time tracking updates.",
          "Student-friendly interface with secured mobile-based login via Firebase.",
          "Admin backend for configuring EV routes, schedules, and alerts.",
        ],
      },
    ],
    mainImage:
      "https://images.unsplash.com/photo-1731286507379-94216c27cf9d?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: [],
    techstack: [
      "Flutter",
      "Firebase",
      "MySQL",
      "AWS LightSail",
      "Traccar",
      "Geo-fencing",
      "VPC",
      "Firestore",
    ],
    github: "https://github.com/DudipalaSathvikreddy/IITI_GO",
  },

  {
    id: 3,
    title: "Amazon",
    alt: "amazon_clone",
    name: "Amazon Clone Web App",
    description: [
      {
        title: "Project Overview",
        content:
          "This project is a front-end clone of the Amazon e-commerce website, built from scratch to practice core concepts of HTML, CSS, and JavaScript.",
        list: [
          "Recreated Amazon's homepage layout and styling using semantic HTML and custom CSS.",
          "Focused on pixel-precision layout, reusable components, and responsive design.",
          "Designed as a learning-first project to strengthen front-end structure and UX understanding.",
        ],
      },
      {
        title: "JavaScript & Interactivity",
        content:
          "The project helped build strong foundations in DOM manipulation, event handling, and JavaScript logic.",
        list: [
          "Added an interactive cart section that displays shipping and delivery options, dynamically updates the total price based on selected options, and enhances user engagement with real-time UI feedback.",
          "Practiced JavaScript essentials including variables, functions, and event listeners.",
          "Explored asynchronous programming using callbacks, promises, fetch API, and async/await for dynamic content handling.",
        ],
      },

      {
        title: "Testing and Best Practices",
        content:
          "The project included hands-on exploration of testing fundamentals and good development habits.",
        list: [
          "Used Jasmine to write unit tests for interactive JavaScript components.",
          "Adopted modular file structure and clear naming conventions for maintainability.",
          "Focused on code clarity, accessibility, and consistency throughout development.",
        ],
      },
    ],
    mainImage:
      "https://images.unsplash.com/photo-1475598322381-f1b499717dda?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: [amazon1, amazon2],
    techstack: ["HTML", "CSS", "JavaScript", "Fetch API", "Jasmine"],
    github: "https://github.com/sathvik9849/javascript-amazon-project",
  },

];

export function getProjects(): ProjectType[] {
  return products;
}

export async function getOneProject(
  id: number
): Promise<ProjectType | undefined> {
  return products.find((product) => product.id === id);
}
