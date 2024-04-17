// page.tsx
"use client";
import React from "react";
import Card from "../components/card";
import Button from "../components/button";

function Page() {

  return (
    <div className="flex flex-col items-center w-3/5 justify-center gap-6  h-full">
      <div className="flex items-center flex-col mt-5  gap-0 text-center">
        <p className="font-semibold text-base sm:text-2xl text-footer-text text-center w-full">
          Concerned About Costs?
        </p>

        <p className="font-semibold text-base sm:text-2xl text-footer-text text-center w-full">
          Not Seeing Returns Yet?
        </p>
      </div>
      <div className="flex flex-col overflow-y-auto mb-5 items-center justify-center gap-5">
        <Card
          HeaderText="Explore Pricing Options"
          Description="We suggest you review all our pricing plans before settling on 
          your final choice.
          "
          IsGradientButton={true}
          HasIcon={false}
          ButtonText="Explore Pricing Options"
          LinkText="Never Mind! Take Me Back To My Account."
          IsDescBold={true}
        />
        <Button
          onClick={undefined}
          mainText="Continue To Cancel Your Account"
          icon=""
          color="bg-red-800"
        />
      </div>
    </div>
  );
}

export default Page;
