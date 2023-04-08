import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { SiGmail, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
const Footer: FC = () => {
  return (
    <section className='max-w-xs m-auto mt-12 md:mt-32 text-center'>
      <div className='mt-5 mb-5 md:hidden block'>
        <ul className='flex justify-center gap-4'>
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
      <div className='text-sm dark:text-darkGray text-lightGray'>
        <a href='https://github.com/sokcheadev2001/my_portfolio'>
          Designed & Built by Sokchea Leang
          <br />
          All rights reserved © 2023.
        </a>
      </div>
    </section>
  );
};

export default Footer;
