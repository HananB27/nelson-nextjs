'use client'

import React, { FC, ReactNode, MouseEvent } from 'react';

interface MainButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  mainText: string;
  smallerText?: string;
}

const MainButton: FC<MainButtonProps> = ({ onClick, mainText, smallerText }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded flex flex-col items-center w-full"
      style={{ backgroundColor: '#2277F6' }}
      onClick={onClick}
    >
      <span className="text-sm font-bold sm:text-lg">{mainText}</span>
      {smallerText && <span className="text-xxs sm:text-sm">{smallerText}</span>}
    </button>
  );
};

export default MainButton;

