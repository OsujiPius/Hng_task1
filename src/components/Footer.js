import React from "react";
import Zuri from "../components/assests/zuri.svg";
import Ingressive from "../components/assests/ingressive.svg";

export default function Footer() {
  return (
    <div
      className="sm:h-20 h-auto my-10 w-full max-w-5xl border-t border-gray-400 flex 
    justify-between pt-5 items-center sm:flex-row flex-col gap-4"
    >
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
