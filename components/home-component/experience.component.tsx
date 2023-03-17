import { motion } from "framer-motion";
import React from "react";
import { Section } from "../framer-motion/motion.component";
import VerticalTabs from "../mui/tab";

const Experiences = () => {
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
            Experience
          </h2>
        </motion.div>
        <VerticalTabs />
      </div>
    </Section>
  );
};

export default Experiences;
