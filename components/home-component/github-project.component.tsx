import { FC } from "react";
import { motion } from "framer-motion";
import { Section } from "../framer-motion/motion.component";
import { MdFolderOpen } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
const Project: FC = () => {
  return (
    <Section>
      <div className='md:mt-24 mt-16'>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className='flex after:content-[""] after:md:w-74 after:w-32 after:mt-5 after:ml-5 after:h-0.1 after:bg-cyan-900'
        >
          <h2 className='dark:text-brightGray text-gray-800 md:text-4xl text-3xl font-bold leading-none capitalize'>
            Side Projects
          </h2>
        </motion.div>
        <ul className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10'>
          <motion.li
            className='dark:bg-lightPrimary bg-darkGray py-8 px-7 rounded-xl'
            whileHover={{
              scale: 1.05,
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
              A simple react app that fetching api and render with search method
              to find specific monster
            </div>
            <div className='flex justify-between'>
              <RiReactjsFill className='text-2xl text-cyan-500' />
            </div>
          </motion.li>
          <motion.li
            className='dark:bg-lightPrimary bg-darkGray py-8 px-7 rounded-xl'
            whileHover={{
              scale: 1.05,
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
              A simple react app that fetching api and render with search method
              to find specific monster
            </div>
            <div className='flex justify-between'>
              <RiReactjsFill className='text-2xl text-cyan-500' />
            </div>
          </motion.li>
          <motion.li
            className='dark:bg-lightPrimary bg-darkGray py-8 px-7 rounded-xl'
            whileHover={{
              scale: 1.05,
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
              A simple react app that fetching api and render with search method
              to find specific monster
            </div>
            <div className='flex justify-between'>
              <RiReactjsFill className='text-2xl text-cyan-500' />
            </div>
          </motion.li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
        </ul>
      </div>
    </Section>
  );
};

export default Project;
