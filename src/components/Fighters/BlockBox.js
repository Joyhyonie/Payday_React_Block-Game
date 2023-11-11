import React from "react";
import CommonCSS from "../../css/common.module.css";
import one from "../../../public/images/blockOne.png";
import two from "../../../public/images/blockTwo.png";
import three from "../../../public/images/blockThree.png";
import four from "../../../public/images/blockFour.png";
import five from "../../../public/images/blockFive.png";

function BlockBox() {
  /* 선택된 블럭에 따른 색 변경 */

  const color = {
    filter: "opacity(0.35) grayscale(100%)",
  };

  return (
    <div className={CommonCSS.blockBox}>
      <div>
        <img src={one} alt="첫번째 블럭" />
      </div>
      <div>
        <img src={two} alt="두번째 블럭" />
      </div>
      <div>
        <img src={three} alt="세번째 블럭" />
      </div>
      <div>
        <img src={four} alt="네번째 블럭" />
      </div>
      <div>
        <img src={five} alt="다섯번째 블럭" />
      </div>
    </div>
  );
}

export default BlockBox;
