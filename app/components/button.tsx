'use client'

import React, { FC, ReactNode, MouseEvent } from 'react';
import Image from "next/image";

interface MainButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  mainText: string;
  smallerText?: string;
  color?:string;
  icon:string;
}

const MainButton: FC<MainButtonProps> = ({ onClick, mainText, smallerText, color, icon }) => {
  return (
    <button
      className={`${color} text-white py-1 px-4 rounded flex flex-col items-center w-3/6`}

      onClick={onClick}
    >
        <div className="flex">

        {icon && (
            <Image
            width={15}
            height={15}
            src={`/${icon}.svg`}
            alt="Background Image"
            />
        )}
        <div className="flex flex-col text-center">
            
        <span className="text-xs font-bold lg:text-sm">{mainText}</span>
        {smallerText && <span className="text-xxs sm:text-sm">{smallerText}</span>}
        </div>
        </div>
    </button>
  );
};

export default MainButton;

