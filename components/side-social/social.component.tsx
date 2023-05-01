import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { IoCodeSlashSharp } from "react-icons/io5";
import {
  SiGmail,
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiMinutemailer,
} from "react-icons/si";
const SocialSide: FC = () => {
  return (
    <div className='md:w-32 md:block flex'>
      <Link href='/' className='dark:text-brightGray flex-1'>
        Sochea
      </Link>
      <div className='md:hidden flex gap-4 justify-end'>
        <Link
          href='/resume'
          className='dark:text-brightGray text-gray-800 dark:hover:text-teal-400 hover:text-lightGray'
        >
          <motion.button
            className='flex items-center justify-items-center'
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.8 }}
          >
            Resume
          </motion.button>
        </Link>
        <Link
          href='/contact'
          className='dark:text-brightGray text-gray-800 dark:hover:text-teal-400 hover:text-lightGray'
        >
          <motion.button
            className='flex items-center justify-items-center'
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.8 }}
          >
            Contact
          </motion.button>
        </Link>
      </div>

      <div className='md:mt-64'>
        <ul className='hidden md:block'>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className='mt-4'
          >
            <Link
              href='https://www.linkedin.com/in/sokchea-leang-916684221/'
              aria-label='linkedin profile'
            >
              <SiLinkedin className='text-2xl  dark:text-brightGray text-gray-800 dark:hover:text-white' />
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className='mt-4'
          >
            <Link
              href='https://github.com/sokcheadev2001'
              aria-label='github profile'
            >
              <SiGithub className='text-2xl dark:text-brightGray text-gray-800 dark:hover:text-white' />
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className='mt-4'
          >
            <Link
              href='https://twitter.com/LeangSokchea'
              aria-label='twitter profile'
            >
              <SiTwitter className='text-2xl  dark:text-brightGray text-gray-800 dark:hover:text-white' />
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className='mt-4'
          >
            <Link
              href='mailto:sokchealeang.dev@gmail.com'
              aria-label='twitter profile'
            >
              <SiGmail className='text-2xl  dark:text-brightGray text-gray-800 dark:hover:text-white' />
            </Link>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};
export default SocialSide;
