'use client';
import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';

const Library = () => {
  const onClick = {
    //handle upload later
  };

  return (
    <div
      className='flex
  flex-col
  
  '
    >
      <div
        className='flex
         item-center
         justify-between
         px-5 py-4
         '
      >
        <div
          className='
         inline-flex
         items-center
         gap-x-4
         
        '
        >
          <TbPlaylist
            size={26}
            className='
           text-neutral-400
          '
          />
          <p
            className='
           text-neutral-400
           font-medium
           text-md'
          >
            Your Library
          </p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          className='
        text-neutral-400
        hover:text-white
          transition
          cursor-pointer
        '
        />
      </div>
      <div
        className='
      
      flex 
      flex-col
      gap-y-2
      mt-4
      px-3
      '
      >
        List of songs
      </div>
    </div>
  );
};

export default Library;
