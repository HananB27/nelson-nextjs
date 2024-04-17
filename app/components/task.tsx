// components/Task.tsx
'use client'
import React from 'react';
import Image from 'next/image';

interface TaskProps {
  text: string;
}

const Task: React.FC<TaskProps> = ({ text }) => {
  return (
    <div className="flex items-center space-x-2 w-full">
      <Image 
        width={30}
        height={30}
        src="/tick.svg"
        alt="tick"
      />
      <p className='text-xs lg:text-lg'>{text}</p>
    </div>
  );
};

export default Task;
