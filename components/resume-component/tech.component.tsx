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
          <div className='dark:bg-primary bg-secondary p-3 mb-8 md:px-10 md:py-5 border-2 border-secondary dark:border-brightGray'>
            <h3 className='mb-10 dark:text-brightGray text-gray-800'>
              <i>These are tech I use for building server-side applications</i>
            </h3>
            <div className='flex'>
              <div className='w-16 mb-2'>
                <a href='https://www.php.net/'>
                  <Image
                    src='/lang-img/php.png'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='php'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://laravel.com/'>
                  <Image
                    src='/lang-img/laravel.png'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='laravel'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://nodejs.org/en'>
                  <Image
                    src='/lang-img/nodejs.png'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='html'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://expressjs.com/'>
                  <Image
                    src='/lang-img/express.png'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='express js'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://www.typescriptlang.org/'>
                  <Image
                    src='/lang-img/typescript.png'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='typescript'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://www.mysql.com/'>
                  <Image
                    src='/lang-img/mysql.png'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='mysql'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='dark:bg-primary bg-secondary p-3 mb-8 md:px-10 md:py-5 border-2 border-secondary dark:border-white'>
            <h3 className='mb-10 dark:text-brightGray text-gray-800'>
              <i>These are tech I use for building client-side applications</i>
            </h3>
            <div className='flex'>
              <div className='w-16 mb-2'>
                <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
                  <Image
                    src='/lang-img/html.png'
                    className='h-12 logo_lang'
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
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='css'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://tailwindcss.com/'>
                  <Image
                    src='/lang-img/tailwindcss.png'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='tailwindcss'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://react.dev/'>
                  <Image
                    src='/lang-img/react.png'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='react'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://nextjs.org/'>
                  <Image
                    src='/lang-img/nextjs.png'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='next js'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
                  <Image
                    src='/lang-img/javascript.png'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='javascript'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='dark:bg-primary bg-secondary p-3 mb-8 md:px-10 md:py-5 border-2 border-secondary dark:border-white'>
            <h3 className='mb-10 dark:text-brightGray text-gray-800'>
              <i>Other tools... and more!</i>
            </h3>
            <div className='flex'>
            <div className='w-16 mb-2'>
                <a href='https://npmjs.com/'>
                  <Image
                    src='/lang-img/npm.png'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='npm'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://www.heroku.com/'>
                  <Image
                    src='/lang-img/heroku.png'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='heroku'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://github.com/'>
                  <Image
                    src='/lang-img/github.png'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='github'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://www.docker.com/'>
                  <Image
                    src='/lang-img/docker.webp'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='docker'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://www.digitalocean.com/'>
                  <Image
                    src='/lang-img/digital_ocean.png'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='digital ocean'
                  />
                </a>
              </div>
              <div className='w-16 mb-2'>
                <a href='https://vercel.com/'>
                  <Image
                    src='/lang-img/vercel.svg'
                    className='h-12 logo_lang'
                    width={48}
                    height={48}
                    alt='vercel'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <a href="" className="mt-10 dark:text-teal-400 text-teal-600 md:py-4 md:px-8 py-2 px-4 border border-teal-400 dark:border-teal-600 rounded-md dark:hover:bg-gray-800 hover:bg-gray-100">Download My Resume</a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Tech;
