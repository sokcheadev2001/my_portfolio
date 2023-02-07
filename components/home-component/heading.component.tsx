import { motion } from "framer-motion";
import Image from "next/image";
import NAME_DATA from "../../name";
import Button from "../button/button.component";

const Heading = () => {
  const NameList = NAME_DATA.map((name) => (
    <motion.span
      key={name.letter}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: name.delay, duration: 1.5 }}
    >
      {name.letter}
    </motion.span>
  ));
  return (
    <header className='mt-10 md:flex'>
      <div className='md:flex-1 py-10'>
        <motion.p
          className='dark:text-brightGray text-gray-800 mb-8 text-center md:text-left'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hi :-D, my name is
        </motion.p>
        <motion.h1 className='dark:text-teal-400 text-teal-600 text-6xl leading-none mb-4 text-center md:text-left font-bold md:font-extrabold'>
          {NameList}
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className='dark:text-brightGray text-gray-800 text-xl md:text-2xl capitalize text-center md:text-left'
        >
          web developer
        </motion.p>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className='leading-7 dark:text-darkGray text-lightGray text-base mt-10 text-center md:text-left md:w-96 md:px-0 px-5'
        >
          I&apos;m a backend developer baseed in Phnom Penh, Cambodia. Currently, I am focused on
          bulding and learning full-stack development.
        </motion.p>
        <motion.div
          className='md:mt-14 mt-8 flex flex-col items-center md:block'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
        >
          <Button
            destination='/resume'
            className='dark:text-teal-400 text-teal-600 py-4 px-8 border border-teal-400 dark:border-teal-600 rounded-md dark:hover:bg-gray-800 hover:bg-gray-100'
            name='Check out my resume!'
          />
        </motion.div>
      </div>
      <div className='md:flex-1 py-10 top-0 bottom-0'>
        <Image
          src='/favicon.png'
          width='200'
          height='100'
          alt='Sokchea Leang'
          priority
        />
      </div>
    </header>
  );
};

export default Heading;
