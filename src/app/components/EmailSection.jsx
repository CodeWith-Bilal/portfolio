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
          Hi, I&apos;m Muhammad Bilal, I&apos;m a dedicated professional with a passion
          for web development, specializing in the MERN stack. with expertise in
          HTML, CSS, React, JavaScript, Next.js, Node.js, Express, and MongoDB
          I'm a dedicated professional with a passion for web development,
          specializing in the MERN stackI&apos;m currently looking for new
          opportunities, my inbox is always open. Whether you have a question or
          just want to say hi, I&apos;ll try my best to get back to you!
        </p>
       </div>
       </div>
       <div className="socials flex justify-center gap-2">
          <Link href="https://github.com/CodeWithMian">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-bilal-2621802a6/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="tel:+923086350364">
                <Image src={Phone} alt="Phone" width={50} height={50}/>
          </Link>
          <Link href="mailto:mb03086350364@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11 mt-1 p-0">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

          </Link>
        </div>
        
    </section>
  );
};

export default EmailSection;
