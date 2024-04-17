// page.tsx
"use client";
import React from "react";
import Image from "next/image"; // Assuming your footer component is in a file named footer.tsx
import Footer from "../components/footer";
import Card from "../components/card";
import Button from "../components/button";


function Page() {


  return (
    <div className="flex flex-col text-center lg:flex-row-reverse gap-3 justify-center items-center lg:h-screen lg:gap-20 lg:w-10/12">

    
        <div className="flex flex-col w-4/5 gap-3 lg:gap-10  lg:h-4/5">
        <div className="">

        <p className="text-lg font-semibold text-footer-text">We're sorry to see you go...</p>
        <p className="text-xl font-extrabold text-footer-text mb-3">How about giving us another chance? </p>
        <div className="w-full bg-gray-200 rounded-sm h-2.5 dark:bg-gray-300 mb-3">
            <div className="bg-red-600 h-2.5 rounded-sm dark:bg-red-500 w-5/12" ></div>
        </div>
        <p className="font-semibold italic text-footer-text">We're preparing to delete all designs and data...</p>
        </div>

   
        
        <div className="flex flex-col gap-4 ">
        <Button
            onClick={undefined}
            mainText="Never Mind! Take Me Back To My Account"
            smallerText="Your account will remain active"
            icon=''
            color='bg-[#2277F6] w-full'
            />
        <Button
          onClick={undefined}
          mainText="Cancel My Account & Delete All My Content"
          smallerText="Warming this cannot be undone"
          icon=""
          color="bg-red-900 w-full"
          />
        </div>
        </div>
            
        <img 
       src={"/page-image.png"}
       alt="Page image"
       className=' lg:w-full'
       
       />
       

      

    
      <Footer/>
       </div>
  );
}

export default Page;
