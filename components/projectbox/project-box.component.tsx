import { motion } from "framer-motion";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdFolderOpen } from "react-icons/md";
import { RiReactjsFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";

const ProjectBox = () => {
  const arrs = ["RiReactjsFill"];
  const loop = () => {
    const listItems = arrs.map((number) => <li key={number}>{number}</li>);
    return listItems;
  };
  return (
    <motion.li
      className='dark:bg-lightPrimary bg-darkGray py-8 px-7 rounded-xl'
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
    >
      <div className='dark:bg-primary/20 bg-secondary py-5 flex justify-between'>
        <div>
          <MdFolderOpen className='text-3xl dark:text-teal-400 text-gray-800 dark:hover:text-white' />
        </div>
        <span className='flex gap-4 items-center'>
          <SiGithub className='text-xl dark:text-brightGray text-gray-800 dark:hover:text-white' />
          <FaExternalLinkAlt className='text-xl dark:text-brightGray text-gray-800 dark:hover:text-white' />
        </span>
      </div>
      <div className='md:text-xl dark:text-brightGray text-lightGray mb-3'>
        React Monster
      </div>
      <div className='text-sm dark:text-darkGray text-lightGray pb-10'>
        A simple react app that fetching api and render with search method to
        find specific monster
      </div>
      <div className='flex justify-between'>
        <RiReactjsFill className='text-2xl text-cyan-500' />
      </div>
    </motion.li>
  );
};

export default ProjectBox;
