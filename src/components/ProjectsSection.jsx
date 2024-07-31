"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Home shapers",
    description:
      "Transform your living space with our innovative home decor solutions. Combining style and functionality, our curated collection of decor items elevates every room. From modern minimalism to classic elegance, discover pieces that reflect your personality and create a welcoming, beautiful home. Redefine your interiors with our expert designs.",
    image: "/images/projects/home-shapers.jpg",
    tag: ["All", "Web"],
    // gitUrl: "/",
    previewUrl: "https://www.homeshapers.co/",
  },
  {
    id: 2,
    title: "Trip Planing",
    description:
      "Plan your perfect getaway with our trip planning tool. Effortlessly organize itineraries, book accommodations, and discover local attractions. Our platform offers personalized recommendations and real-time updates to ensure a seamless travel experience. Enjoy stress-free planning and make the most of your adventures with our comprehensive trip planning solution",
    image: "/images/projects/trip-planing.jpg",
    tag: ["All", "Web"],
    // gitUrl: "/",
    previewUrl: "https://gate8.travel/",
  },
  {
    id: 3,
    title: "School-card",
    description:
      "Streamline school management with our SaaS solution. Easily manage student information, track teacher performance, and enhance communication. Our platform offers real-time updates, secure data storage, and comprehensive analytics to improve efficiency and foster a collaborative learning environment. Empower your educational institution with our all-in-one management tool.",
    image: "/images/projects/school-card.jpg",
    tag: ["All", "Web"],
    // gitUrl: "/",
    previewUrl: "https://schoolcard.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   // gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   // gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   // gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
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
              // gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
