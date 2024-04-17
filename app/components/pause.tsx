// components/PauseButton.tsx

import React, { FC, MouseEvent } from 'react';
import Image from "next/image";

interface PauseButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  mainText: string;
  color?:string;
  icon:string;
}

const PauseButton: FC<PauseButtonProps> = ({ onClick, mainText, color, icon }) => {
  return (
    
    <button
      className={`${color} text-white py-2 px-6 rounded flex flex-col items-center `}
      onClick={onClick}
    >
      <div className="flex gap-2 items-center">
        {icon && (
          <div className="hidden lg:block">
            <Image
              width={30}
              height={30}
              src={`/${icon}.svg`}
              alt="Icon Image"
            />
          </div>
        )}
        <div className="flex flex-col text-center">
          <span className="text-sm font-bold sm:text-base xl:text-bigger">{mainText}</span>
        </div>
      </div>
    </button>
  );
};

export default PauseButton;
