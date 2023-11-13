import React, { useEffect, useState } from "react";
import MainCSS from "../../css/main.module.css";
import one from "../../../public/images/blockOne.png";
import two from "../../../public/images/blockTwo.png";
import three from "../../../public/images/blockThree.png";
import four from "../../../public/images/blockFour.png";
import five from "../../../public/images/blockFive.png";

function MockBlockBox() {
  /* Block Box의 형태만을 갖추기 위한 컴포넌트 */
  return (
    <div className={MainCSS.blockBox}>
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

export default MockBlockBox;
