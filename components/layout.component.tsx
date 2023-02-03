import Head from "next/head";
import NavBar from "./navbar/nav.component";
import SocialSide from "./side-social/social.component";
import { motion, useScroll, useSpring } from "framer-motion";

function Component() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className='progress-bar dark:bg-gray-200 bg-gray-700'
      style={{ scaleX }}
    />
  );
}
type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Sokchea Leang | Portfolio</title>
        <meta
          name='description'
          content='Sokchea Leang is a web developer who specializes in handling & building digital experiences.'
        ></meta>
        <meta name='generator' content='Next JS 13'></meta>
        <meta
          property='og:title'
          content='Sokchea Leang | Web Developer'
        ></meta>
        <meta
          property='og:description'
          content='Sokchea Leang is a web developer who specializes in handling & building digital experiences.'
        ></meta>
        <meta property='og:url' content='https://sokchea.me/'></meta>
        <meta property='og:type' content='website'></meta>
        <link rel='icon' href='/favicon.png' />
      </Head>
      {Component()}
      <div className='cursor rounded' />
      <div className='cursor pointed' />
      <div className='bg-secondary dark:bg-gray-900 md:py-16'>
        <div className='bg-white dark:bg-gray-900 md:max-w-6xl md:mx-auto sm:rounded-lg p-2 md:p-8 md:shadow-2xl'>
          <div className='md:flex'>
            <div>
              <SocialSide />
            </div>
            <div className='md:flex-1'>
              <NavBar />
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
