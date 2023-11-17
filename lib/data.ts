import React from "react";
import  { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";


export const links = [
{
    name: "Home",
    hash: "#home",
},
{
    name: "About",
    hash: "#about",
},
{
    name: "Projects",
    hash: "#projects",
},
{
    name: "Skills",
    hash: "#skills",
},
{
    name: "Experience",
    hash: "#experience",
},
{
    name: "Contact",
    hash: "#contact",
},
] as const;

export const experienceData = [
    {
        title: "Engineering Internship",
        location: "Mesa, AZ",
        description:"Worked at Special Devices Inc. in Manufacturing Engineering. Shadowed injection molding and designed a fully automted molding process.",
        icon: React.createElement(LuGraduationCap),
        date: "2016-2017"
    },
    {
        title: "Peralta Engineering Studio",
        location: "ASU Polytechnic, Mesa, AZ",
        description:"Designed, manufactured & soldered custom PCBs. Oversaught and assisted all types of people in the wood, metal, and electrical makerspace.",
        icon: React.createElement(CgWorkAlt),
        date: "2018-2019"
    },
    {
        title: "DSSA",
        location: "Mesa, AZ",
        description:"Manufactuing Engineer. Worked mostly in pre-production large assembly lines. Led the team in drawing submissions to the machine shop. Supervised 3d printers. Qualified and tested (6 sigma) MANY processes including welding, lasers, crimping, sorting and more. Analyzed large production data sets for effciencies and discrepencies.",
        icon: React.createElement(FaReact),
        date: "2019-2021"
    },
    {
        title: "vs Robo",
        location: "Phoenix, Arizona",
        description: "Full-Stack Web Development and Mechanical Design. Founded my own VR simulator company. Learned the full stack web development process while doing so.",
        icon: React.createElement(FaReact),
        date: "2022 - "
    }
] as const; 

export const projectsData = [
    { title: "Versus Robotics", description: "Full Stack and design.", tags:["React", "Next.js", "SQL", "Tailwind", "Framer"], imageUrl: corpcommentImg, },
    { title: "Brogey Golf", description: "Design and Full-stack. Used computer vision to analyze golf swings and display back to users allowing them to improve like never before.", tags:["React", "Next.js", "Typescript", "Tailwind", "Framer"], imageUrl: rmtdevImg, },
    { title: "Handyman", description: "My Freelance Template Suite. Options for local businesses to have some say in their design process and have an advanced website. ", tags:["React", "Next.js", "Astro", "Analytics", "Tailwind", "Framer"], imageUrl: wordanalyticsImg, },
] as const; 

export const skillsData= [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;