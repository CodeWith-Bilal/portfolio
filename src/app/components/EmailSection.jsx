"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Phone from "../../../public/phone.webp";
// import Mail from "../../../public/mail.webp";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section id="contact" className="w-full text-center relative mt-24 mb-20">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold ">
          Let&apos;s Connect
        </h5>
        <div className="flex justify-center items-center my-5">
          <p className="text-[#ADB7BE] mb-4 max-w-[930px] text-center">
            {" "}
            Hello, I'm Muhammad Bilal—a creative and driven full stack web
            developer passionate about transforming ideas into dynamic digital
            experiences. Specializing in the MERN stack, I harness the power of
            React, JavaScript, Next.js, Node.js, Express, and MongoDB to build
            robust, scalable applications that truly stand out. I'm always eager
            to collaborate on innovative projects and explore new opportunities
            that challenge the status quo. Whether you're looking to launch a
            groundbreaking application or simply want to connect and chat about
            tech, my inbox is always open. Let's create something extraordinary
            together!
          </p>
        </div>
      </div>
      <div className="socials flex justify-center gap-2">
        <Link href="https://github.com/CodeWith-Bilal">
          <Image src={GithubIcon} alt="Github Icon" />
        </Link>
        <Link href="https://www.linkedin.com/in/CodeWith-Bilal/">
          <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link>
        <Link href="tel:+923086350364">
          <Image src={Phone} alt="Phone" width={50} height={50} />
        </Link>
        <Link href="mailto:codes.tech4@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-11 h-11 mt-1 p-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default EmailSection;
