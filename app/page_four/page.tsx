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
    "And More....",
  ];

  return (
    <div className="flex flex-col items-center w-3/5 justify-center gap-6  h-full">
      <div className="flex items-center flex-col mt-5  gap-0 text-center">
        <p className="font-normal text-base sm:text-2xl text-white text-center w-3/4">
          Our appologies for any inconveniences...
        </p>
        <p className="font-semibold text-base sm:text-xl text-footer-text text-center w-3/5">
          Occasionally, technical or support issues do arise, and we deeply
          regret any trouble this may cause.
        </p>

        <p className="font-black text-base sm:text-xl text-footer-text text-center w-3/5 mt-10">
          Try one of these options first...
        </p>
      </div>
      <div className="flex flex-col overflow-y-auto mb-5 items-center justify-center gap-5">
        <Card
          HeaderText="Facing a Potential Bug? "
          BreakText="Here's Your Next Step"
          Description="Reach out to us. It could be a misunderstanding rather than an actual bug. You're welcome to join our free weekly webinars to gain better understanding of our system. Rest assured, we're committed to assisting you in every possible way to ensure you have all the tools necessary to grow your business. So, don't hesitate to get in touch."
          ButtonText="Contact Support"
          IsGradientButton={true}
          HasIcon={false}
        />
        <Card
          HeaderText="Need a Feature That's "  
          BreakText="Not Available?"
          Description="Simply hit the button below to access the feature request page. This is where you can propose new ideas, upvote existing ones, and review our changelog - a comprehensive list of all recently launched features."
          IsGradientButton={true}
          HasIcon={false}
          ButtonText="Submit A Feature Request"
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
