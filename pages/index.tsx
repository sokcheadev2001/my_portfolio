import { motion } from "framer-motion";
import { FC } from "react";
const Home: FC = () => {
  return (
    <>
      <header className='mt-10 md:flex'>
        <div className='md:flex-1'>
          <motion.h1 className='text-5xl leading-none mb-4 text-center md:text-left font-bold md:font-extrabold'>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              S
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              o
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              k
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              c
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              h
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              e
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              a
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className='uppercase text-center md:text-left'
          >
            web developer
          </motion.p>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className='text-sm mt-10 text-center md:text-left md:w-96 md:px-0 px-5'
          >
            Hi :-D, My name is Sokchea aka chea. <br /> In 2022, I graduated
            from Royal University of Phnom Penh with a degree in computer
            science. Currently working as backend developer in Phnom Penh city.
          </motion.p>
        </div>
        <div className='md:flex-1'></div>
      </header>
      <div id='cando' className='min-h-screen mt-36'>
        <section>
          <h1 className='md:text-4xl text-3xl font-bold leading-none capitalize'>
            What i can do
          </h1>
        </section>
      </div>
    </>
  );
};

export default Home;
