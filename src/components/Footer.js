import React from "react";
import Zuri from "../components/assests/zuri.svg";
import Ingressive from "../components/assests/ingressive.svg";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between w-full h-auto max-w-5xl gap-4 pt-5 pl-5 my-10 border-t border-gray-400 sm:h-20 sm:items-center items-left sm:flex-row sm:pl-0">
      <a href="https://training.zuri.team/" target="_blank" rel="noreferrer">
        <img src={Zuri} alt="" />
      </a>
      <p className="text-base text-gray-500">HNG Internship 9 Frontend Task</p>
      <a href="https://ingressive.org/" target="_blank" rel="noreferrer">
        <img src={Ingressive} alt="" />
      </a>
    </div>
  );
}
