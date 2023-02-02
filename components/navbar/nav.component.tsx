import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

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
          className='text-sm inline-block'
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <FaMoon
          className='text-sm inline-block'
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <nav>
      <div className='hidden md:flex'>
        <div className='md-flex-1 text-sm'>
          <div className='dark:text-white font-bold md:ml-4 inline-block py-1 px-2 f-link'>
            <a href='mailto:leang.sokchea13@gmail.com'>
              leang.sokchea13@gmail.com
            </a>
          </div>
          <span className='cursor-pointer ml-10 dark:text-white'>
            {handleThemeChange()}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
