import Image from "next/image";
import Link from "next/link";
import MainButton from "./components/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-3/5 justify-center gap-7">
      <div className="flex items-center flex-col mt-5 text-footer-text gap-0 text-center">
      <p className="font-normal text-sm sm:text-xl">We're sorry to see you go! </p>
      <p className="font-semibold text-base sm:text-2xl w-4/5 text-wrap text-center">
        Could you share with us the main reason for wanting to cancel your
        account?
      </p>
      <Link href={""} className="text-xs mt-4 font-bold underline">Never Mind! Take Me Back To My Account.</Link>
      </div>
      <div className="flex flex-col gap-1 md:gap-3 w-full">

      <MainButton onClick={undefined} mainText={"Found Alternative"} smallerText="I found a different software that better suits my needs."></MainButton>
      <MainButton onClick={undefined} mainText={"Lack of Features"} smallerText="The software lacks certain features I need."></MainButton>
      <MainButton onClick={undefined} mainText={"Usability Issues"} smallerText="I find it difficult to navigate and use the software."></MainButton>
      <MainButton onClick={undefined} mainText={"Cost Concerns"} smallerText="The pricing doesn’t fit my budget."></MainButton>
      <MainButton onClick={undefined} mainText={"Other"} smallerText="I prefer not to say."></MainButton>
    </div>
      </div>
  );
}
