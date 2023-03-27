import { motion } from "framer-motion";
import React from "react";
import { Section } from "../framer-motion/motion.component";
import VerticalTabs from "../mui/tab";

const Experiences = () => {
  return (
    <Section>
      <style jsx global>
        {`
          .dark .css-10d9dml-MuiTabs-indicator,
          .dark .css-1aquho2-MuiTabs-indicator {
            background-color: #2dd4bf;
          }

          .dark .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected,
          .dark .css-1ujykiq-MuiButtonBase-root-MuiTab-root.Mui-selected {
            color: #2dd4bf;
          }

          .dark .css-1h9z7r5-MuiButtonBase-root-MuiTab-root,
          .dark .css-1ujykiq-MuiButtonBase-root-MuiTab-root {
            color: #8892af;
          }

          @media (max-width: 601px) {
            .css-1ingggc {
              display: block;
            }
          }
        `}
      </style>
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
        <div className='mt-10'>
          <VerticalTabs />
        </div>
      </div>
    </Section>
  );
};

export default Experiences;
