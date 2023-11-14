import React, { useState } from "react";
import MainCSS from "../../css/main.module.css";
import bong from "../../../public/images/bong.png";
import kim from "../../../public/images/kim.png";
import lee from "../../../public/images/lee.png";
import BlockBox from "./BlockBox";
import Cover from "./Cover";
import Thinking from "./Thinking";
import MockBlockBox from "./MockBlockBox";
function Me({ turn, profile, selectedBlock, setSelectedBlock, thinking }) {
  let character;
  switch (profile) {
    case "bong":
      character = bong;
      break;
    case "kim":
      character = kim;
      break;
    case "lee":
      character = lee;
      break;
    default:
      character = bong;
  }

  return (
    <>
      {!turn ? <Cover /> : null}
      {thinking ? <Thinking /> : null}
      {turn ? (
        <BlockBox
          selectedBlock={selectedBlock}
          setSelectedBlock={setSelectedBlock}
        />
      ) : (
        <MockBlockBox />
      )}
      <img src={character} className={MainCSS.profile} alt="프로필" />
    </>
  );
}

export default Me;
