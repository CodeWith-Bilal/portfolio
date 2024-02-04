"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

import {  Song_Myung } from "next/font/google";
const anton = Song_Myung({ subsets: ["latin"],weight:"400"});

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              Hi, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Muhammad Bilal",
                1000,
                "Mern Stack Developer",
                1000,
                "Front-End Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"><span className={anton.className}>
            Hi, I'm Muhammad Bilal, I'm a dedicated professional with a passion
            for web development, specializing in the MERN stack. with expertise
            in HTML, CSS, React, JavaScript, Next.js, Node.js, Express, and
            MongoDB I'm a dedicated professional with a passion for web
            development, specializing in the MERN stack.</span>
          </p>
          <div>
            <Link
              href="mailto:mb03086350364@gmail.com"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1huwxMILy8THlWvAuLR92LHPqPz3MEboZ/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-img.webp"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
