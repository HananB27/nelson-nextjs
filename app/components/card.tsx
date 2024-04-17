// components/Card.tsx

import React, { FC } from "react";
import PauseButton from "./pause";
import Link from "next/link";
import Task from "./task"; // Import the Task component

interface CardProps {
  HeaderText: string;
  BreakText?: string;
  SubHeader?: string;
  Description?:string;
  ButtonText?: string;
  NoteText?: string;
  LinkText?: string;
  IsGradientButton: boolean;
  HasIcon: boolean;
  IsDescBold? :boolean;
  tasks?: string[]; // Modify tasks prop to accept an array of strings
}

const Card: FC<CardProps> = ({
  HeaderText,
  BreakText,
  SubHeader,
  Description,
  ButtonText,
  NoteText,
  LinkText,
  IsGradientButton,
  HasIcon,
  tasks,
  IsDescBold // Include tasks in props
}) => {
  return (
    <div className="bg-white rounded-md w-4/5 overflow-visible p-8 text-footer-text flex flex-col items-center text-center justify-center sm:mb-2 sm:m-5 mb-5 gap-1" 
    style={{ boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }}>
      <h2 className={`text-lg md:text-2xl lg:text-3xl text-black font-semibold ${BreakText ? 'pb-5' : 'pb-0'}`} >
        {HeaderText}
        {BreakText && <br /> /* Render BreakText if it exists */}
        {BreakText && <span>{BreakText}</span>}
      </h2>
      {SubHeader && <p className={` font-semibold sm:w-4/5 pb-3 ${BreakText ? "lg:text-base text-xs" : "lg:text-xl text-sm"}`}>
        {SubHeader}
      </p>}
      {Description && <p className= {`${IsDescBold? "font-bold": "" } text-xs sm:text-base sm:px-5 w-fit`}>{Description}</p>}
      

      {tasks && tasks.map((task, index) => (
        <div className="flex flex-col justify-start w-full mt-5 sm:mt-1">
          <Task key={index} text={task} />
        </div>
      ))}
      <div className={`w-full items-center flex justify-center ${tasks? "mt-5" : 'mt-3'} ${Description? "mt-8" : 'mt-3'}`}>
        <PauseButton
          onClick={undefined}
          mainText={`${ButtonText}`}
          icon={HasIcon ? "pause" : ""}
          color={` ${IsGradientButton ? "bg-gradient-to-b from-[#2677f4] to-[#2484c6]" : "bg-[#2277F6]"} md:w-1/2 `}
        />
      </div>

      {/* Render tasks if tasks exist */}
      

      {NoteText && (
        <p className="text-xs lg:text-base leading-7 mt-4 sm:w-3/5 lg:w-3/4">
          <span className=" text-xs lg:text-base font-semibold mb-2 ">
            NOTE:
          </span>{" "}
          {NoteText}
        </p>
      )}
      {LinkText && (
        <Link
          href={""}
          className="text-xs lg:text-base mt-4 font-bold underline  text-[#1C75BC]"
        >
          {LinkText}
        </Link>
      )}
    </div>
  );
};

export default Card;
