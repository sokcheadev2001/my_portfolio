import { motion } from "framer-motion";
import { Section } from "../framer-motion/motion.component";
const Tech = () => {
  return (
    <Section>
      <div className='mt-6'>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className='flex after:content-[""] after:md:w-74 after:w-32 after:mt-5 after:ml-5 after:h-0.1 after:bg-cyan-900'
        >
          <h2 className='dark:text-brightGray text-gray-800 md:text-4xl text-3xl font-bold leading-none capitalize'>
            Programming Languages
          </h2>
        </motion.div>
        <div className='leading-7 dark:text-darkGray text-lightGray text-base mt-10 text-left h-96'>
          Coming soon
        </div>
      </div>
    </Section>
  );
};

export default Tech;
