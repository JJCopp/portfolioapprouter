"use client";
import React from 'react'
import { motion } from "framer-motion";
import SectionHeading from './section-heading';


export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-30 border border-red-500"
    initial= {{ opacity:0, y: 100 }}
    animate = {{ opacity: 1, y:0 }}
    transition= {{ delay: 0.175 }}
    id="about">
       <SectionHeading>About </SectionHeading>
        <p className="mb-3">
        In 2019 I graduated from ASU with a degree in {" "}<span className="font-semibold">Robotics Engineering.</span> My minors were <span className="font-medium ">Manufacturing and Entrepreneurship. </span>
        The curriculum focused on mechanical, electrical, and software engineering. I began my mastering mechanical 
        design then, schematics and PCB fabrication. Software was my weakness. Thanks to a few great professors 
        and peers, I became fascinated with AI and computer vision. This helped me overcome my 
        weakness of writing software when developing embedded and robotic systems. From there, I had the desire to 
        present my software to its users and learned full stack web development to build UIs and host my projects on 
        the internet.  My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and TailwindCSS
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
        
        </p>

    </motion.section>
  )
}
