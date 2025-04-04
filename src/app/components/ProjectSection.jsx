"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const projectsData = [
    {
      id: 1,
      title: "Next.js Portfolio Website",
      description:
        "My Professional Portfolio realted to Mern Stack Development. I made this with Next.js 14 and Tailwindcss",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "https://portfolio-gamma-orpin-52.vercel.app/",
    },
    {
      id: 2,
      title: "Movie Tracker App",
  description:"The Movie Tracker app, hving tools like ReactJS and for styling tailwindcss is used and to manage the state redux toolkit used this is fully responsive app with search functionality and movie details. All the data come from the API user can search any movie which he want",
      image: "/images/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/CodeWith-Bilal/movie-suggestion-app",
      previewUrl: "https://movie-suggestion-app-seven.vercel.app/",
    },
    {
      id: 3,
      title: "E-commerce Application",
      description:"A modern app built with React Native, Redux Toolkit, TypeScript, and Tailwind CSS. It allows users to explore trending movies, manage watchlists, and track favorites with ease. Featuring a sleek design, seamless state management, and reliable performance, it’s the perfect tool for movie enthusiasts to stay organized and inspired.",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl:
        "https://e-shop-project-r844cwcgr-muhammad-bilals-projects-de34ca5e.vercel.app/",
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "This is my second project made with Next.js 14 and proramming langugae for this project is node.js and database for this project is MonogoDB picture stored in AWS for styling tailwindcss i use",
      image: "/images/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "NFT-Marketplace Application",
      description: "This project is a web application fully responsive with integration of API using typescript tailwindcss and state will be managed by redux toolkit",
      image: "/images/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/CodeWith-Bilal/nft-marketplace",
      previewUrl: "https://nft-marketplace-alpha-one.vercel.app/",
    },
    {
      id: 7,
      title: "Missing Person Finder App",
      description: "This app is build using the React-Native with all functionality like user can register yourself and login also login with Google and data will be store in Firebase user can Add the report about the missing person and can contact via Email",
      image: "/images/projects/7.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/CodeWith-Bilal/Native-personFinder",
      previewUrl: "https://drive.google.com/file/d/146a0-BrmALvTxU5sul3PNnkg3i_fxuN7/view?usp=drivesdk",
    },
    {
      id: 8,
      title: "Real-Time Chat App",
      description: "This is a real-time chat application built with React Native, Firebase,Typescricpt, Redux-Toolkit and Gifted Chat. It allows users to create accounts, log in, and chat with other users in real time. The app features a sleek design, seamless functionality, and reliable performance, making it the perfect tool for staying connected with friends and family.",
      image: "/images/projects/8.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/CodeWith-Bilal/Native-RealTimeChatApp",
      previewUrl: "https://drive.google.com/file/d/1tQWQBJJx2zI2EaCocQf8ts1OleOQxLcb/view?usp=sharing",
    },
    {
      id: 9,
      title: "HR Management System",
      description: "HR Management System – A modern, secure platform built with Next.js, MongoDB, Prisma, and NextAuth. Admins get powerful tools to manage employees, track attendance, assign projects, and approve leave requests—all in one intuitive dashboard. Employees enjoy self-service access to their records, attendance history, and leave status, reducing HR back-and-forth. With role-based security, smooth performance, and scalable architecture, this system eliminates outdated workflows. Perfect for businesses wanting an efficient, user-friendly HR solution. 💡🚀",
      image: "/images/projects/9.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/CodeWith-Bilal/hr-managment",
      previewUrl: "https://hr-managment-by-bilal.vercel.app/",
    },
  ];
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
