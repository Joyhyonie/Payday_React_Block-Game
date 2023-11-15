import React from "react";
import MainCSS from "../../css/main.module.css";
import ya from "../../../public/images/ya.png";
import BlockBox from "./BlockBox";
import bong from "../../../public/images/bong.png";
import Cover from "./Cover";
import MockBlockBox from "./MockBlockBox";
function Someone({ turn, selectedBlock, setSelectedBlock, gameStart }) {
  return (
    <>
      {turn || !gameStart ? <Cover /> : null}
      <img src={ya} className={MainCSS.profile} alt="YA" />
      {!turn ? (
        <BlockBox
          selectedBlock={selectedBlock}
          setSelectedBlock={setSelectedBlock}
        />
      ) : (
        <MockBlockBox />
      )}
    </>
  );
}

export default Someone;
