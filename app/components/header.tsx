'use client'
import React from 'react';
import Image from 'next/image';

export default function Header(){
    return(
        <div className="h-8 bg-[#EF4136] flex justify-center gap-1">
            <Image
            width={30}
            height={30}
          src="/warning.svg" // Specify the path to your image
          alt="Background Image"
          
        />
        <p className='font-bold text-white text-xs md:text-base lg:text-lg lg:font-medium content-center'>Note: Your Account Hasn't Been Canceled Yet</p>
        </div>

    );
}