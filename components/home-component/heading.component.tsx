import { motion } from "framer-motion";
import Image from "next/image";
import { User } from "../../types/User/user.type";
import Button from "../button/button.component";

const Heading = ({ title, name, position, description }: User) => {
  const NameList = Array.from(name).map((nametext, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index / 3.2, duration: 1.2 }}
    >
      {nametext}
    </motion.span>
  ));
  return (
    <header className='md:my-24 my-12 md:flex'>
      <div className='md:flex-1 py-10'>
        <motion.p
          className='dark:text-brightGray text-gray-800 mb-8 text-center md:text-left'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {title}
        </motion.p>
        <motion.h1 className='dark:text-teal-400 text-teal-600 md:text-6xl text-5xl leading-none mb-4 text-center md:text-left font-bold md:font-extrabold'>
          {NameList}
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className='dark:text-brightGray text-gray-800 text-xl md:text-2xl capitalize text-center md:text-left'
        >
          {position}
        </motion.p>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className='leading-7 dark:text-darkGray text-lightGray text-base mt-10 text-center md:text-left md:w-96 md:px-0 px-5'
        >
          {description}
        </motion.p>
        <motion.div
          className='md:mt-14 mt-8 flex flex-col items-center md:block'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
        >
          <Button
            destination='/resume'
            className='dark:text-teal-400 text-teal-600 md:py-4 md:px-8 py-2 px-4 border border-teal-400 dark:border-teal-600 rounded-md dark:hover:bg-gray-800 hover:bg-gray-100'
            name='Check out my resume!'
          />
        </motion.div>
      </div>
      <div className='mx-auto w-52 md:block flex md:flex-1 lg:py-0 md:py-10 md:top-0 md:bottom-0 md:ml-0 hover:dark:drop-shadow-2darkShadow hover:drop-shadow-2lightShadow justify-center'>
        <Image
          src='/avatar.png'
          width='320'
          height='200'
          alt='Sokchea Leang'
          priority
          className='flex'
        />
      </div>
    </header>
  );
};

export default Heading;
