import React from "react";
import Section from "./section";
import Divider from "./divider";
import SectionTitle from "./section-title";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type TechProps = {
  data: TechStack[];
};

const Tech: React.FC<TechProps> = ({ data }) => {
  return (
    <Section id="tech">
      <Divider />
      <SectionTitle>Technologies</SectionTitle>

      <div className="mt-10">
        <div className="text-2xl">
          <p>I&apos;ve worked with a range a technologies in the</p>
          <p>Front End development world.</p>
        </div>

        {data &&
          data.map((tech) => (
            <div key={tech._id} className="grid grid-cols-2 lg:grid-cols-7 gap-10 mt-10">
              {tech.stack.map((item, id) => (
                <div
                  key={id}
                  className="flex flex-col items-center space-y-5 bg-white py-6 rounded-2xl shadow-sm text-lg"
                >
                  <Image
                    src={urlForImage(item.image.asset._ref).url()}
                    alt={item.label}
                    width={30}
                    height={30}
                  />
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          ))}
      </div>
    </Section>
  );
};

export default Tech;
