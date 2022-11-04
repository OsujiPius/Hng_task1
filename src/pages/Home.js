import React from "react";
import Links from "../components/Links";
import Profile from "../components/Profile";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <div className="w-full h-auto max-w-6xl">
      <Profile />
      <Links />
      <Socials />
    </div>
  );
}
