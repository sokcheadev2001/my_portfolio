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
        <title>Sokchea Leang</title>
        <meta
          name='description'
          content='Sokchea Leang is a web developer who specializes in handling & building digital experiences.'
        ></meta>
        <meta name='image' content='https://sokchea.me/favicon.png'></meta>
        <meta name='generator' content='Next JS 13'></meta>
        <link rel='icon' href='/favicon.png' type='image/png' />
        <link
          rel='apple-touch-icon'
          sizes='48x48'
          href='/favicon48x48.png'
        ></link>
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/favicon72x72.png'
        ></link>
        <link
          rel='apple-touch-icon'
          sizes='96x96'
          href='/favicon96x96.png'
        ></link>
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/favicon144x144.png'
        ></link>
        <link
          rel='apple-touch-icon'
          sizes='192x192'
          href='/favicon192x192.png'
        ></link>
        <link
          rel='apple-touch-icon'
          sizes='256x256'
          href='/favicon256x256.png'
        ></link>
        <link
          rel='apple-touch-icon'
          sizes='384x384'
          href='/favicon384x384.png'
        ></link>
        <link
          rel='apple-touch-icon'
          sizes='512x512'
          href='/favicon512x512.png'
        ></link>
        <meta property='og:title' content='Sokchea Leang'></meta>
        <meta
          property='og:description'
          content='Sokchea Leang is a web developer who specializes in handling & building digital experiences.'
        ></meta>
        <meta property='og:url' content='https://sokchea.me/'></meta>
        <meta property='og:type' content='website'></meta>
        <meta name='twitter:card' content='summary_large_image'></meta>
        <meta name='twitter:creator' content='@LeangSokchea'></meta>
        <meta name='twitter:title' content='Sokchea Leang'></meta>
        <meta
          name='twitter:description'
          content='Sokchea Leang is a web developer who specializes in handling & building digital experiences.'
        ></meta>
        <meta
          name='twitter:image'
          content='https://sokchea.me/favicon.png'
        ></meta>
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
