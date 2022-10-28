import React from "react";
import Slack from "../components/assests/slack.svg";
import Github from "../components/assests/github.svg";

export default function Socials() {
  return (
    <div className="h-20 my-10 flex items-center justify-center">
      <a href="https://slack.com/dev_pius" target="_blank" rel="noreferrer">
        <img src={Slack} alt="slack-icon" />
      </a>
      <a href="https://github.com/OsujiPius" target="_blank" rel="noreferrer">
        <img src={Github} alt="github-icon" className="ml-3" />
      </a>
    </div>
  );
}
