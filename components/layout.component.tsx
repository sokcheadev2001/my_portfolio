import { useTheme } from "next-themes";
import NavBar from "./navbar/nav.component";
import SocialSide from "./side-social/social.component";
type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
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
