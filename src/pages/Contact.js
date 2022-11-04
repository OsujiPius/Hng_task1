import React from "react";

export default function Contact() {
  return (
    <div className="sm:w-[90%] w-full h-auto py-10 flex justify-center flex-col items-center">
      <header className="sm:w-3/5 w-[90%] h-auto py-5 mb-10">
        <p className="text-[#101828] text-4xl font-semibold">Contact me</p>
        <p className="text-[#475467] text-2xl font-normal mt-4">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </header>
      <form action="#" className="w-[90%] h-auto py-2 sm:w-3/5">
        <div className="flex flex-col justify-between min-[1100px]:flex-row">
          <div className="flex flex-col">
            <label className="text-[#344054] font-medium">First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="h-11 w-full min-[1100px]:w-[348px] rounded-lg border border-[#D0D5DD] outline-none pl-3"
            />
          </div>
          <div className="flex flex-col mt-4 sm:mt-0">
            <label className="text-[#344054] font-medium">Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="h-11 w-full min-[1100px]:w-[348px] rounded-lg border border-[#D0D5DD] outline-none pl-3"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-[#344054] font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your last name"
            className="h-11 w-full rounded-lg border border-[#D0D5DD] outline-none pl-3"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-[#344054] font-medium">Message</label>
          <textarea
            placeholder="Send me a message and I'll reply you as soon as possible..."
            className="h-36 w-full rounded-lg border border-[#D0D5DD] outline-none pl-3 resize-none"
          />
        </div>
        <div className="flex mt-4">
          <input type="checkbox" />
          <p className="text-[#475467] ml-4">
            You agree to providing your data to Pius who may contact you.
          </p>
        </div>
        <div className="my-5 text-center">
          <input
            type="submit"
            value="Send message"
            className="mx-auto bg-[#1570EF] text-white py-3 px-5 w-full rounded-lg"
          />
        </div>
      </form>
    </div>
  );
}
