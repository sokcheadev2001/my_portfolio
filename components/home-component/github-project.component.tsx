import { FC } from "react";
import { motion } from "framer-motion";
import { Section } from "../framer-motion/motion.component";
import { MdFolderOpen } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
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
        <ul className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10'>
          <li className='dark:bg-lightPrimary bg-darkGray py-8 px-5 rounded-xl'>
            <div className='dark:bg-primary/20 bg-secondary py-5 flex justify-between'>
              <div>
                <MdFolderOpen className='text-3xl dark:text-teal-400 text-gray-800 dark:hover:text-white' />
              </div>
              <span>
                <SiGithub className='text-xl dark:text-brightGray text-gray-800 dark:hover:text-white' />
                <FaExternalLinkAlt className='text-xl dark:text-brightGray text-gray-800 dark:hover:text-white' />
              </span>
            </div>
          </li>
          <li>2</li>
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
