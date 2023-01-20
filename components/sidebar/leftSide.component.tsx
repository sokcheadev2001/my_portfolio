import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
export default function LeftBar() {
  return (
    <div className='w-10 fixed left-10 right-auto text-white bottom-0'>
      <ul className='flex flex-col'>
        <li>
          <a href='' className='p-2.5'>
            <FiGithub className='w-5 h-5' />
          </a>
        </li>
        <li>
          <a href='' className='p-2.5'>
            <FiInstagram className='w-5 h-5' />
          </a>
        </li>
        <li>
          <a href='' className='p-2.5'>
            <FiTwitter className='w-5 h-5' />
          </a>
        </li>
        <li>
          <a href='' className='p-2.5'>
            <FiLinkedin className='w-5 h-5' />
          </a>
        </li>
      </ul>
    </div>
  );
}
