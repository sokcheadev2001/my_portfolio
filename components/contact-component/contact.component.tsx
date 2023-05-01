import { motion } from "framer-motion";
import { Section } from "../framer-motion/motion.component";
const Contact = () => {
  return (
    <Section>
      <div className='mt-6'>
        <section>
          <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className='dark:text-brightGray tracking-tight font-extrabold text-gray-800 leading-none text-4xl capitalize text-center mb-4'
            >
              Contact Us
            </motion.h2>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
              className='leading-7 dark:text-darkGray text-lightGray text-base mt-10 text-center md:w-96 mx-auto mb-8'
            >
              Wanna talk more about my skill and need detail about anything? Let
              me know by give a quick contact.
            </motion.p>
            <motion.form
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
              className='space-y-8'
            >
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Your email
                </label>
                <input
                  type='email'
                  id='email'
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='name@gmail.com'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='Let me know how i can help you'
                  required
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                >
                  Your message
                </label>
                <textarea
                  id='message'
                  rows={6}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Leave a comment...'
                ></textarea>
              </div>
              <button
                type='submit'
                className='dark:text-teal-400 text-teal-600 md:py-4 md:px-8 py-2 px-4 border border-teal-400 dark:border-teal-600 rounded-md dark:hover:bg-gray-800 hover:bg-gray-100'
              >
                Send message
              </button>
            </motion.form>
          </div>
        </section>
      </div>
    </Section>
  );
};

export default Contact;
