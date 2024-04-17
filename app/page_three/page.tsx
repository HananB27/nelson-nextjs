// page.tsx
"use client";
import React from "react";
import Image from "next/image"; // Assuming your footer component is in a file named footer.tsx
import Footer from "../components/footer";
import Card from "../components/card";
import Button from "../components/button";


function Page() {

    const tasks = [
        "Browser-based software available on all devices",
        "Realistic 3D rendering and detailed floor plans",
        "Access a vast library of real products to add to your design",
        "Work seamlessly with your team, clients, or contractors",
        "Integrate to your website easily",
        "And More...."
      ];

  return (
    <div className="flex flex-col items-center w-3/5 justify-center gap-7  h-full">
      <div className="flex items-center flex-col mt-5 text-footer-text gap-0 text-center">
        <p className="font-semibold text-base sm:text-xl  text-center">
          We're constantly evolving, and while we may lack some features, we
          offer a robust set of capabilities that include
        </p>
      </div>
      <div className="flex flex-col overflow-y-auto mb-5 items-center justify-center gap-5">
      <Card
          HeaderText="MSMV Design Software Features"
          SubHeader="That you probalby won’t find in other programs"
          ButtonText="Explore All That MSMV Has to Offer"
          IsGradientButton={true}
          HasIcon={false}
          tasks={tasks}
        />
    <Card 
    HeaderText="Request a Feature!"
    SubHeader="Did you know that you can request a feature you need?"
    Description="Your input matters. Feel free to visit our feature recommendation 
    page to suggest a new feature!"
    IsGradientButton={true}
    HasIcon={false}
    ButtonText="Click Here To Recommend a Feature"
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
