import React from 'react';
import Image from 'next/image';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className='flex flex-row items-center gap-5 py-6 px-10 border-b border-gray-300 '>
      <h1 className='flex-1 font-semibold text-gray-900 text-3xl'>
        {children}
      </h1>

      <div className='flex gap-3 border-l border-gray-300 pl-5'>
        <Image width={44} height={44} src='/images/avatar.png' alt='avatar' />
        <div>
          <p className='font-semibold text-gray-900 text-base'>Adam Smith</p>
          <p className='font-light text-gray-900 text-sm'>
            adamsmith@gmail.com
          </p>
        </div>
      </div>
    </header>
  );
}
