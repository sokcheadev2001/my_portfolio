import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Section } from "../framer-motion/motion.component";
const IcanDo = () => {
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
            About Me
          </h2>
        </motion.div>
        <div className='md:flex'>
          <div className='md:flex-1'>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
              className='leading-7 dark:text-darkGray text-lightGray text-base mt-10 text-left'
            >
              In 2022, I graduated from{" "}
              <b className='dark:text-teal-400 text-teal-600'>
                Royal University of Phnom Penh
              </b>{" "}
              with a degree in{" "}
              <b className='dark:text-brightGray text-lightGray'>
                computer science
              </b>
              . I am currently a full-time{" "}
              <b className='dark:text-brightGray text-lightGray'>
                Backend Developer
              </b>{" "}
              at{" "}
              <b className='dark:text-teal-400 text-teal-600'>
                Trusted IT Business
              </b>
              .
              <br />
              <br />
              Here are some technologies I have been working with:
            </motion.p>
            <motion.ul className='grid grid-cols-2 gap-4 pt-5'>
              <motion.li
                className='dark:text-darkGray text-lightGray text-sm relative md:pl-5 pl-3 before:content-["▹"] before:absolute before:left-0 before:text-teal-400'
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
              >
                Laravel
              </motion.li>
              <motion.li
                className='dark:text-darkGray text-lightGray text-sm relative md:pl-5 pl-3 before:content-["▹"] before:absolute before:left-0 before:text-teal-400'
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
              >
                Node Js
              </motion.li>
              <motion.li
                className='dark:text-darkGray text-lightGray text-sm relative md:pl-5 pl-3 before:content-["▹"] before:absolute before:left-0 before:text-teal-400'
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.4, duration: 1 }}
              >
                Javascript ES6
              </motion.li>
              <motion.li
                className='dark:text-darkGray text-lightGray text-sm relative md:pl-5 pl-3 before:content-["▹"] before:absolute before:left-0 before:text-teal-400'
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.4, duration: 1 }}
              >
                Typescript
              </motion.li>
              <motion.li
                className='dark:text-darkGray text-lightGray text-sm relative md:pl-5 pl-3 before:content-["▹"] before:absolute before:left-0 before:text-teal-400'
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
              >
                React Js
              </motion.li>
              <motion.li
                className='dark:text-darkGray text-lightGray text-sm relative md:pl-5 pl-3 before:content-["▹"] before:absolute before:left-0 before:text-teal-400'
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
              >
                Next Js
              </motion.li>
            </motion.ul>
          </div>
          <motion.div
            className='mx-auto w-52 md:block flex md:flex-1 lg:py-0 md:py-10 md:top-0 md:bottom-0 md:ml-0 hover:dark:drop-shadow-2darkShadow hover:drop-shadow-2lightShadow justify-center'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
          >
            <Image
              src='/me.jpg'
              className='filter rounded-md shadow-md mt-10'
              alt='sokchea'
              width='300'
              height='300'
              priority
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default IcanDo;
