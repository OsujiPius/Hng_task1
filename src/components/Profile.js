import React from "react";
import Icon from "../components/assests/profile-icon.svg";

export default function Profile() {
  return (
    <div className="w-full flex justify-center items-center h-auto flex-col mt-5 relative">
      <img
        id="profile__img"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQHoVlqaMvQYyw/profile-displayphoto-shrink_100_100/0/1657878787934?e=1672272000&v=beta&t=Chp7mBI3d5yJlG2lvinMr6Iff79YbgMe4-68eB95xWs"
        alt=""
        className="h-[88px] w-[88px] rounded-full"
      />
      <h1 className="text-[#101828] font-[inter] font-[700px] text-2xl mt-3">
        Pius Osuji
      </h1>
      <h2 id="twitter">pius_osuji</h2>
      <h2 id="slack" className="hidden">
        dev_pius
      </h2>
      <div className="absolute border-2 border-gray-400 p-2 rounded-full right-[12%] top-[5%]">
        <img src={Icon} alt="icon" />
      </div>
    </div>
  );
}
