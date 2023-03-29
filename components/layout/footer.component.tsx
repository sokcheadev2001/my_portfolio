import { FC } from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa";
const Footer: FC = () => {
  return (
    <section className='max-w-xs m-auto mt-12 md:mt-32 text-center'>
      <div className='capitalize font-bold text-lg dark:text-brightGray text-lightGray'>
        stay connected
      </div>
      <div className='dark:text-darkGray text-lightGray text-sm mt-8'>
        Phnom Penh, Cambodia
      </div>
      <div className='mt-4 font-medium text-xl dark:text-brightGray text-lightGray mb-3'>
        <a
          href='mailto:sokchealeang.dev@gmail.com'
          className='hover:text-white'
        >
          sokchealeang.dev@gmail.com
        </a>
      </div>
      <div className='mt-5 flex justify-center'>
        <div className='w-8 h-8 rounded-full'>
          <a href='https://t.me/leangsokchea'>
            <FaTelegram className='text-3xl dark:text-brightGray text-gray-800 dark:hover:text-white' />
          </a>
        </div>
        <div className='w-8 h-8 rounded-full ml-5'>
          <a href='https://instagram.com/lx_chea/'>
            <FaInstagram className='text-3xl dark:text-brightGray text-gray-800 dark:hover:text-white' />
          </a>
        </div>
      </div>
      <div className='dark:text-darkGray text-lightGray mt-12'>
        <a href='https://github.com/sokcheadev2001/my_portfolio'>
          Designed & Built by Sokchea Leang
          <br />
          All rights reserved ©2023.
        </a>
      </div>
    </section>
  );
};

export default Footer;
