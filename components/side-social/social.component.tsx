import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import {
  SiGmail,
  SiGithub,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
const SocialSide: FC = () => {
  return (
    <div className='w-32'>
      <Link href='/' className='dark:text-brightGray'>
        Sochea
      </Link>
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
