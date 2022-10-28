import React from "react";

export default function LinkItem({ href, name, id }) {
  return (
    <a href={href} id={id} target="_blank" rel="noreferrer">
      <div className="w-[90%] bg-[#EAECF0] mx-auto text-center h-[76px] rounded-lg my-10">
        <p className="text-[#101828] text-lg pt-5">{name}</p>
      </div>
    </a>
  );
}
