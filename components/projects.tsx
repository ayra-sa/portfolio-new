import React from "react";
import Section from "./section";
import Divider from "./divider";
import SectionTitle from "./section-title";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type ProjectsProps = {
  data: Project[];
};

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <Section id="projects">
      <Divider />
      <SectionTitle>Projects</SectionTitle>
      <div className="mt-10 text-2xl">
        <p>
          I have worked on several projects, both personal projects and client
          projects
        </p>
        <p>Please click to go to project details</p>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 mt-10">
        {data &&
          data.map((project) => (
            <Link
              href={`/project/${project.slug.current}`}
              key={project._id}
              className="drop-shadow-md rounded-md relative"
            >
              <Image
                src={urlForImage(project.cover.asset._ref).url()}
                alt={project.cover_title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-60 lg:h-auto rounded-md"
              />
              <div className="absolute inset-0 rounded-md bg-neutral-300 bg-opacity-90 flex flex-col items-center place-content-center transition duration-300 hover:opacity-0">
                <div className="w-[75%] text-center">
                  <h2 className="text-xl lg:text-3xl mb-5">
                    {project.cover_title}
                  </h2>
                  <p className="text-base lg:text-lg font-medium mb-5">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3 flex-wrap justify-center">
                    {project.tags.map((tag, id) => (
                      <span
                        key={id}
                        className="bg-[#f1f8ff] text-blue-500 text-xs lg:text-base rounded-full px-3 py-1 font-semibold lowercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </Section>
  );
};

export default Projects;
