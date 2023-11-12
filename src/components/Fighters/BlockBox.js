import React from "react";
import MainCSS from "../../css/main.module.css";
import one from "../../../public/images/blockOne.png";
import two from "../../../public/images/blockTwo.png";
import three from "../../../public/images/blockThree.png";
import four from "../../../public/images/blockFour.png";
import five from "../../../public/images/blockFive.png";

function BlockBox() {
  /* 누구의 turn? */

  /* 선택된 블럭에 따른 색 변경 */

  const color = {
    /* 선택된 블럭이 아닌 다른 것들에 적용할 style */
    filter: "opacity(0.25)",
  };

  return (
    <div className={MainCSS.blockBox}>
      <div>
        <img src={one} style={color} alt="첫번째 블럭" />
      </div>
      <div>
        <img src={two} style={color} alt="두번째 블럭" />
      </div>
      <div>
        <img src={three} alt="세번째 블럭" />
      </div>
      <div>
        <img src={four} style={color} alt="네번째 블럭" />
      </div>
      <div>
        <img src={five} style={color} alt="다섯번째 블럭" />
      </div>
    </div>
  );
}

export default BlockBox;
