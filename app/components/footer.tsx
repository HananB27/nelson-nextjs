'use client'
import React from 'react';

export default function Footer(){
    return(
        <div className=" w-full flex flex-col items-center text-footer-text fixed bottom-0 pb-12 bg-white">
            <hr className="w-full h-px bg-[#BCBEC0] border-0 mb-4"/>
            <p className="font-roboto text-footerText font-semibold">Terms of Service Privacy    |    DMCA    |    Policy</p>
            <p className="font-roboto text-footerText lg:w-2/5 text-center font-semibold mb-2">California residents can obtain information about the categories of personal information collected, and the business purposes for which the information is collected, by clicking here</p>
            <p className="font-roboto text-footerText font-extralight pb-15">msmvdesign.com - All Rights Reserved.</p>
        </div>

    );
}