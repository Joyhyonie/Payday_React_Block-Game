import React from "react";
import Header from "../components/Header";
import Board from "../components/Board/Board";
import FightersLayout from "./FightersLayout";
import Footer from "../components/Footer";
import CommonCSS from "../css/common.module.css";
function MainLayout() {
  /* 처음 렌더링될 때만 Game Start 띄우기 */

  return (
    <div className={CommonCSS.alignCenter2}>
      <div className={CommonCSS.mainBox}>
        <Header />
        <div className={CommonCSS.flex}>
          <Board />
          <div>
            <FightersLayout />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
