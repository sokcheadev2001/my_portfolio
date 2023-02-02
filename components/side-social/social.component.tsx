import Link from "next/link";
import { FC } from "react";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
const SocialSide: FC = () => {
  return (
    <div className='w-32'>
      <Link href='/'>Sochea</Link>
      <div className='mt-64'>
        <ul>
          <li className='mt-4'>
            <SiLinkedin className='text-2xl' />
          </li>
          <li className='mt-4'>
            <SiGithub className='text-2xl' />
          </li>
          <li className='mt-4'>
            <SiTwitter className='text-2xl' />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SocialSide;
