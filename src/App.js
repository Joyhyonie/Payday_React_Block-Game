import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Error from "./pages/Error";
import Start from "./pages/Start";
import MainLayout from "./layouts/MainLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Starting Game Page */}
            <Route index element={<Start />} />
            {/* Running Game Layout */}
            <Route path="main" element={<MainLayout />} />
          </Route>
          {/* 설정한 path가 아닐 경우, Error 페이지로 이동 */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
