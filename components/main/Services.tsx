import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { projects } from "@/data";

const Services = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10 z-[20]"
      id="services"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our services
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {projects.map((item) => (
          <ProjectCard
            key={item.title}
            src={item.img}
            link={item.link}
            title={item.title}
            description={item.des}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
