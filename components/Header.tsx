'use client';

import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';

interface HeaderProps {
  children: React.ReactNode;
  className: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const handleLogout = () => {
    //handle logout in future
  };

  return (
    <div
      className={twMerge(
        `
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6
        
  `,

        className
      )}
    >
      <div
        className='
        w-full
        mb-4
        flex
        items-center
        justify-between
      '
      >
        <div
          className='
       
       hidden
       md:flex
       gap-x-2
       items-center
       '
        >
          <button
            onClick={() => router.back()}
            className='rounded-full
          bg-black
          flex
          items-center
          justify-center
          cursor-pointer
          hover:opacity-75
          transition
          '
          >
            <RxCaretLeft size={35} className='text-white' />
          </button>

          <button
            onClick={() => router.forward()}
            className='rounded-full
          bg-black
          flex
          items-center
          justify-center
          cursor-pointer
          hover:opacity-75
          transition
          '
          >
            <RxCaretRight size={35} className='text-white' />
          </button>
        </div>

        <div
          className='
           md:hidden
           flex
           gap-x-2
        
        '
        >
          <button
            className='
           rounded-full
           flex
           bg-white
           items-center
           justify-center
           p-2
           cursor-pointer
           hover:opacity-75
           transition
          '
          >
            <HiHome size={20} className='text-black' />
          </button>
          <button
            className='
           rounded-full
           flex
           bg-white
           items-center
           justify-center
           p-2
           cursor-pointer
           hover:opacity-75
           transition
          '
          >
            <BiSearch size={20} className='text-black' />
          </button>
        </div>

        <div
          className='
      
            flex
            justify-between
            items-center
            gap-x-4'
        >
          <>
            <div>
              <Button>SignOut</Button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Header;
