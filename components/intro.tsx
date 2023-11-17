"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight,  BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';

function Intro() {
  return (
    <section id="home" className="mb-24 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center"> 
        <div className="relative">
            <motion.div
            initial={{opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition ={{ 
              type: "tween",
              duration: 0.2,
            }}
            >
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
                      alt="hero image" width="192" height="192" quality="95" priority={true} className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl"/>
                <motion.span className="absolute bottom-0 right-0 text-4xl"
                initial={{opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition ={{ 
                  type: "spring",
                  stiffness: 125,
                  delay: 0.1,
                  duration: 0.7,
                }}
                >
                  👋
                </motion.span>
            </motion.div>
            </div>
        </div>
        <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl md:tracking-tight" 
        initial= {{ opacity: 0, y: 100}}
        animate={{ opacity:1, y:0 }}
        >
        Hello, I am {" "}
          <span className="font-bold tracking-tight">
            James.{" "}
          </span> I am a {" "}
          <span className="font-bold tracking-tight">
            full stack engineer.
          </span>
          <span>{" "} My current focus is React and Next.js. I also enjoy the backend and other disciplines in engineering.</span>
        </motion.h1>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity:0, y: 100}}
        animate={{ opacity:1, y:0}}
        transition={{delay: 0.1,}}
        >
          <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"> Contact me  <BsArrowRight className=" opacity-70 group-hover:translate-x-2 transition " /> {" "} </Link>
          <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-110 transition border border-black/10 dark:bg-white/20" href="/CV.pdf" download> Download CV {" "}<HiDownload className="opacity-60 group-hover:translate-y-1 transition"/> {" "} </a>

          <a className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]   active:scale-110 transition border border-black/10" href="https://linkedin.com" target="_blank">
            <BsLinkedin />
          </a>
          <a className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-110 transition border border-black/10" href="https://github.com" target="_blank">
            <FaGithubSquare />
          </a>
        </motion.div>
    </section>
  )
}

export default Intro