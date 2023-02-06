import { useTheme } from "next-themes";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";

const NavBar: FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <FaSun
          className='text-lg inline-block'
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <FaMoon
          className='text-lg inline-block'
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <nav>
      <div className='hidden md:flex'>
        <div className='md:flex-1 text-sm'>
          <div className='dark:text-white font-bold md:ml-4 inline-block py-1 px-2 f-link'>
            <a href='mailto:leang.sokchea13@gmail.com'>
              leang.sokchea13@gmail.com
            </a>
          </div>
          <span className='cursor-pointer ml-10 dark:text-white'>
            {handleThemeChange()}
          </span>
        </div>
        <div className='flex gap-5'>
          <Link href='/resume' className='dark:text-white'>
            <motion.button
              className='flex items-center justify-items-center'
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.8 }}
            >
              <IoCodeSlashSharp className='text-2xl inline-block mr-1' />
              Resume
            </motion.button>
          </Link>
          <Link href='/contact' className='dark:text-white'>
            <motion.button
              className='flex items-center justify-items-center'
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.8 }}
            >
              <SiMinutemailer className='text-2xl inline-block mr-1' />
              Contact
            </motion.button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
