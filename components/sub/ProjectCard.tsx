"use client";
import { slideInFromLeft } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

interface Props {
  src?: string;
  title: string;
  description: string;
  link?: string;
  github?: string
}

const ProjectCard = ({ src, title, description, link, github }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[600px]">
      {src && <Image
        src={src!}
        alt={title}
        width={400}
        height={400}
        className="w-full object-contain"
      /> }

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="flex flex-row justify-center gap-10 mt-5">
            {github && <Link role='link' href={github} target='_blank' className='w-10  pl-2'>
                    <FaGithub size={30} color="white"/>
                </Link>
            }
            {
                link && <motion.a href={link}
                        variants={slideInFromLeft(1)}
                        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] p-10'
                    >
                        Visit
                    </motion.a>
            }
        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;