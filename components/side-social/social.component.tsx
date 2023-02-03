import Link from "next/link";
import { FC } from "react";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
const SocialSide: FC = () => {
  return (
    <div className='w-32'>
      <Link href='/'>Sochea</Link>
      <div className='md:mt-64'>
        <ul className='hidden md:block'>
          <li className='mt-4'>
            <Link href='https://www.linkedin.com/in/sokchea-leang-916684221/'>
              <SiLinkedin className='text-2xl' />
            </Link>
          </li>
          <li className='mt-4'>
            <Link href='https://github.com/sokcheadev2001'>
              <SiGithub className='text-2xl' />
            </Link>
          </li>
          <li className='mt-4'>
            <Link href='https://twitter.com/LeangSokchea'>
              <SiTwitter className='text-2xl' />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SocialSide;
