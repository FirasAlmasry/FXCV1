"use client";
import Image from "next/image";
import React from "react";
import Parallax from "react-parallax-tilt";

interface Props {
  link: string;
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <Parallax
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      scale={1}
      transitionSpeed={450}
      className=" relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] card-img_hover"
    >
      <div >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
          />

          <div className="relative p-4">
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <p className="mt-2 text-gray-300">{description}</p>
          </div>
        </a>
      </div>
    </Parallax>
  );
};

export default ProjectCard;
