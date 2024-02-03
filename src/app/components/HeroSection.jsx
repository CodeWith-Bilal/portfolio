import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            Hi, I'm M.Bilal
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hi, I'm Muhammad Bilal, I'm a dedicated professional with a passion
            for web development, specializing in the MERN stack. with expertise
            in HTML, CSS, React, JavaScript, Next.js, Node.js, Express, and
            MongoDB I'm a dedicated professional with a passion for web
            development, specializing in the MERN stack.
          </p>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818]">
            <Image
              src={"/images/hero-img.webp"}
              alt="Hero-Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
