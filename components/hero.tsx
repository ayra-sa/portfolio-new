import { typingData } from "@/constants";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Container from "./container";
import { Controls, Player } from "@lottiefiles/react-lottie-player";

interface HeroProps {
  data: WelcomeMe[];
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className="min-h-screen flex flex-col place-content-center">
      <Container>
        {data &&
          data.map((dt) => (
            <div key={dt._id} className="text-center">
              <h1 className="text-5xl lg:text-7xl mb-10">{dt.title}</h1>
              <Image
                src={urlForImage(dt.image.asset._ref).url()}
                alt="Arya Saputra - Frontend Developer"
                width={0}
                height={0}
                sizes="100vw"
                className="w-16 h-16 mx-auto"
              />
              <p className="font-medium text-base tracking-[.3em] text-opacity-70 uppercase mt-5 mb-3">
                {dt.role}
              </p>

              <TypeAnimation
                sequence={typingData}
                wrapper="p"
                speed={50}
                className="text-2xl lg:text-3xl font-semibold"
                repeat={Infinity}
              />

              <Link href="#about" className="read-more mt-10">
                Read More
              </Link>

              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10">
                <Player
                  autoplay
                  loop
                  src="https://assets4.lottiefiles.com/packages/lf20_b2oxjsii.json"
                  style={{
                    width: "120px",
                    // height: "100px",
                  }}
                >
                  <Controls visible={false} />
                </Player>
              </div>
            </div>
          ))}
      </Container>
    </div>
  );
};

export default Hero;
