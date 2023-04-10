import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "../framer-motion/motion.component";
const Tech = () => {
  return (
    <Section>
      <div className='mt-6'>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className='flex after:content-[""] after:md:w-74 after:w-32 after:mt-5 after:ml-5 after:h-0.1 after:bg-cyan-900'
        >
          <h2 className='dark:text-brightGray text-gray-800 leading-none text-2xl font-bold capitalize'>
            Programming Languages
          </h2>
        </motion.div>
        <div className='mt-10'>
          <div className='dark:bg-primary bg-secondary p-3 mb-8 md:px-10 md:py-5 border-2 border-secondary dark:border-white'>
            <h3 className='mb-10 dark:text-brightGray text-gray-800'>
              <i>These are tech I use for building client-side applications</i>
            </h3>
            <div className='flex'>
              <div className='w-16 mb-2'>
                <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
                  <Image
                    src='/lang-img/html.png'
                    className='h-12'
                    width={48}
                    height={48}
                    alt='html'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
                  <Image
                    src='/lang-img/css-3.png'
                    className='h-12'
                    width={48}
                    height={48}
                    alt='html'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='dark:bg-primary bg-secondary p-3 mb-8 md:px-10 md:py-5 border-2 border-secondary dark:border-brightGray'>
            <h3 className='mb-10 dark:text-brightGray text-gray-800'>
              <i>These are tech I use for building client-side applications</i>
            </h3>
            <div className='flex'>
              <div className='w-16 mb-2'>
                <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
                  <Image
                    src='/lang-img/html.png'
                    className='h-12'
                    width={48}
                    height={48}
                    alt='html'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
                  <Image
                    src='/lang-img/css-3.png'
                    className='h-12'
                    width={48}
                    height={48}
                    alt='html'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Tech;
