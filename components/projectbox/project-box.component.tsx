import { motion } from "framer-motion";
import Link from "next/link";
import React, { FC } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdFolderOpen } from "react-icons/md";
import { SiGithub } from "react-icons/si";

interface Project {
  data: {
    projectUrl: string;
    projectDemo?: string;
    projectTitle: string;
    projectDescription: string;
    projectLanguages: string;
  };
}
const ProjectBox = ({
  data: {
    projectUrl,
    projectDemo,
    projectTitle,
    projectDescription,
    projectLanguages,
  },
}: Project) => {
  return (
    <motion.li
      className='dark:bg-lightPrimary bg-gray-100/80 py-8 px-7 rounded-xl'
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
    >
      <div className='dark:bg-primary/20 bg-gray-200/30 py-5 flex justify-between'>
        <div>
          <MdFolderOpen className='text-3xl dark:text-teal-400 text-gray-800 dark:hover:text-white' />
        </div>
        <span className='flex gap-4 items-center'>
          <Link href={projectUrl} aria-label='github url'>
            <SiGithub className='text-xl dark:text-brightGray text-gray-800 dark:hover:text-white' />
          </Link>
          {projectDemo !== undefined && projectDemo !== "" ? (
            <Link href={projectDemo} aria-label='project demo url'>
              <FaExternalLinkAlt className='text-xl dark:text-brightGray text-gray-800 dark:hover:text-white' />
            </Link>
          ) : (
            ""
          )}
        </span>
      </div>
      <div className='md:text-xl dark:text-brightGray text-lightGray mb-3'>
        {projectTitle}
      </div>
      <div className='text-sm dark:text-darkGray text-lightGray pb-10'>
        {projectDescription}
      </div>
      <p className='text-xs dark:text-darkGray text-lightGray'>
        {projectLanguages}
      </p>
    </motion.li>
  );
};

export default ProjectBox;
