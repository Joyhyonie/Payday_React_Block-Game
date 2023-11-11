import React, { useState } from "react";
import CommonCSS from "../css/common.module.css";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className={CommonCSS.alignCenter}>
      <div className={CommonCSS.background}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
