'use client';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { HiHome, HiMenuAlt3 } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    []
  );
  return (
    <div className='flex h-full '>
      <div
        className='
       hidden
       md:flex
       flex-col
       gap-y-2
       h-full
       w-[300px]
       p-2
       '
      >
        <Box>
          <div
            className='
            flex
            flex-col
            gap-y-4
            py-4
            px-5'
          >
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item}>
                {children}
              </SidebarItem>
            ))}
          </div>
        </Box>
        <Box
          className='
          h-full
          overflow-y-auto
          '
        >
          <Library />
        </Box>
      </div>
      <div>
        <main className='h-full flex-1 overflow-y-auto py-2'>{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
