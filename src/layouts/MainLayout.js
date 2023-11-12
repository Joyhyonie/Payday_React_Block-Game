import React from "react";
import Header from "../components/Header";
import Board from "../components/Board/Board";
import FightersLayout from "./FightersLayout";
import Footer from "../components/Footer";
import MainCSS from "../css/main.module.css";
function MainLayout() {
  /* 처음 렌더링될 때만 Game Start 띄우기 */

  return (
    <div className={MainCSS.alignCenter}>
      <div className={MainCSS.mainBox}>
        <Header />
        <div className={MainCSS.flex}>
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
