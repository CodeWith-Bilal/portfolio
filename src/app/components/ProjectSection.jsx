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
    // {
    //   id: 2,
    //   title: "Potography Portfolio Website",
    //   description: "Project 2 description",
    //   image: "/images/projects/2.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
    {
      id: 3,
      title: "E-commerce Application",
      description:
        "My First Project I made with Next.js 14 mongoDB data base and Firebase to strore images and backend language for this project is Node.js and Express.js for styling Tailwindcss used.",
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
    // {
    //   id: 6,
    //   title: "Full-stack Roadmap",
    //   description: "Project 5 description",
    //   image: "/images/projects/6.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
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
