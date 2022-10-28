import React from "react";
import LinkItem from "./atoms/LinkItem";

export default function Links() {
  return (
    <div className=" w-full">
      <LinkItem name="Twitter Links" href="https://twitter.com/pius_osuji" />
      <LinkItem
        name="Zuri Team"
        id="btn__zuri"
        href="https://training.zuri.team/"
      />
      <LinkItem name="Zuri Books" id="books" href="http://books.zuri.team" />
      <LinkItem
        name="Python Books"
        id="book__python"
        href="https://books.zuri.team/python-for-beginners?ref_id=dev_pius"
      />
      <LinkItem
        name="Background Check for Coders"
        id="pitch"
        href="https://background.zuri.team"
      />
      <LinkItem
        name="Design Books"
        id="book__design"
        href="https://books.zuri.team/design-rules"
      />
    </div>
  );
}
