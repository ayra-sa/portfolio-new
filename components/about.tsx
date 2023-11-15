import React from "react";
import Divider from "./divider";
import SectionTitle from "./section-title";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "./rich-text-component";
import Link from "next/link";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Section from "./section";
import Button from "./button";

type Props = {
  data: AboutMe[];
};

const About: React.FC<Props> = ({ data }) => {
  return (
    <Section id="about">
      <Divider />
      <SectionTitle>About Me</SectionTitle>
      {data &&
        data.map((about) => (
          <React.Fragment key={about._id}>
            <div className="flex flex-col gap-y-5 lg:flex-row my-10 items-center">
              <div className="flex-1">
                <Image
                  src={urlForImage(about.image.asset._ref).url()}
                  alt="Arya Saputra - Frontend Developer"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto max-w-full h-[400px] mx-auto"
                />
                <div className="flex items-center justify-center lg:hidden">
                  <label htmlFor="love" className="love" title="Like">
                    <input type="checkbox" id="love" className="check-love" />
                    <div className="heart" />
                  </label>

                  <Link href="#contact" title="Contact me">
                    <PaperAirplaneIcon className="w-10 h-10 transition-transform text-gray-500 duration-500 hover:-rotate-45" />
                  </Link>
                </div>
              </div>

              <div className="flex-1">
                <div className="text-lg lg:w-[75%] space-y-3">
                  <PortableText
                    value={about.description}
                    components={RichTextComponent}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-normal items-center">
              <div className="hidden lg:block flex-1">
                <div className="flex justify-center items-center">
                  <label htmlFor="love" className="love" title="Like">
                    <input type="checkbox" id="love" className="check-love" />
                    <div className="heart" />
                  </label>

                  <Link href="#contact" title="Contact me">
                    <PaperAirplaneIcon className="w-10 h-10 transition-transform text-gray-500 duration-500 hover:-rotate-45" />
                  </Link>
                </div>
              </div>
              <div className="lg:flex-1">
                <Link href={`${about.cvUrl}?dl=`}>
                  <Button>My Resume</Button>
                </Link>
              </div>
            </div>
          </React.Fragment>
        ))}
    </Section>
  );
};

export default About;
