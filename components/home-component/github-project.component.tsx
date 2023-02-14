import { FC } from "react";
import { motion } from "framer-motion";
import { Section } from "../framer-motion/motion.component";
import ProjectBox from "../projectbox/project-box.component";

const Project: FC = () => {
  const Project = {
    projectUrl: "https://github.com/sokcheadev2001/React-Store.git",
    projectDemo: "",
    projectTitle: "React Store",
    projectDescription: "Build store front using react js and firebase",
    projectLanguages: "React Js, Firebase",
  };
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
          <ProjectBox data={Project} />
        </ul>
      </div>
    </Section>
  );
};

export default Project;
