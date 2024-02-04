import Link from "next/link";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Phone from "../../../public/phone.webp";
import Image from "next/image";
import {  Tektur } from "next/font/google";
// const anton = Song_Myung({ subsets: ["latin"],weight:"400"});
const owswald = Tektur({ subsets: ["latin"]});
// import NavLink from "./NavLink";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white ">
      <div className="mt-5 mb-8 flex justify-between">
        <div className="menu md:block md:w-auto" id="navbar">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold ml-4 border-b-[3px] border-purple-400"
        >
          <span className={owswald.className}>Portfolio</span>
        </Link>
        </div>

        <div className="flex justify-end items-end gap-2 pr-10">
          <Link href="https://github.com/CodeWithMian">
            <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-bilal-2621802a6/">
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={40}
              height={40}
            />
          </Link>
          <Link href="+923086350364">
            <Image src={Phone} alt="Phone" width={40} height={40} />
          </Link>
          <Link href="mailto:mb03086350364@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 mt-1 p-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
