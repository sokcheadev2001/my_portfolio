import { FC } from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa";
const Footer: FC = () => {
  return (
    <section className='max-w-xs m-auto mt-12 md:mt-32 text-center'>
      <div className='capitalize font-bold text-lg dark:text-brightGray text-lightGray'>
        stay connected
      </div>{" "}
      <div className='text-gray-600 text-sm mt-8'>Phnom Penh, Cambodia</div>{" "}
      <div className='mt-4 font-medium text-xl dark:text-brightGray text-lightGray mb-3'>
        <a href='mailto:sokchealeang.dev@gmail.com'>
          sokchealeang.dev@gmail.com
        </a>
      </div>{" "}
      <div className='mt-12 flex justify-center'>
        <div className='w-8 h-8 rounded-full'>
          <a href='https://t.me/leangsokchea' target='_blank'>
            <FaTelegram className='text-3xl' />
          </a>
        </div>{" "}
        <div className='w-8 h-8 rounded-full ml-5'>
          <a href='https://instagram.com/lx_chea/' target='_blank'>
            <FaInstagram className='text-3xl' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
