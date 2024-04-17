// page.tsx
"use client";
import React from "react";
import Image from "next/image"; // Assuming your footer component is in a file named footer.tsx
import Footer from "../components/footer";
import Card from "../components/card";
import Button from "../components/button";


function Page() {
  return (
    <div className="flex flex-col items-center w-3/5 justify-center gap-7 overflow-y-auto h-full">
      <div className="flex items-center flex-col mt-5 text-footer-text gap-0 text-center">
        <p className="font-semibold text-base sm:text-xl  text-center">
          Breaking up is hard to do, and we're truly bummed to see you go. 
        </p>
        <p className="font-semibold text-base sm:text-xl  text-center">
        But
          hey, how about we just call it a 'creative hiatus'?
        </p>
        
      </div>
      <div className="flex flex-col overflow-y-auto mb-5 items-center justify-center gap-5">
        <Card
          HeaderText="Pause Your Account So You Can"
          BreakText="Pick Up Where You Left Off"
          SubHeader="Pause Your Plan For Just $17/Month To Save All Of Your Data: Your
          Designs, Customers, Invoices, Leads, Products And More."
          ButtonText="Yes, I Want To Pause My Account"
          IsGradientButton={false}
          HasIcon={true}
          NoteText={`If
          you "Pause" your account, your pages will not display live, you won't be
          able to use MSMV...but we'll keep your stuff reserved and all your
          designs waiting so you can resume your account anytime.`}
          LinkText={"Never Mind! Take Me Back To My Account."}
          
        />
        
        <Button
        onClick={undefined}
        mainText="Continue To Cancel Your Account"
        icon=""
        color="bg-red-900"
        />
      </div>
      
    </div>
  );
}

export default Page;
