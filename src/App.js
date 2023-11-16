import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Error from "./pages/Error";
import Start from "./pages/Start";
import MainLayout from "./layouts/MainLayout";
function App() {
  /* 첫 렌더링 시, 빈 보드판 생성 */
  const emptyBoard = Array.from({ length: 10 }, () =>
    Array(10).fill({ value: 0 }),
  );

  // localStorage에서 값을 불러오기, 값이 없으면 기본값 설정
  const [autoMode, setAutoMode] = useState(() => {
    const savedValue = localStorage.getItem("autoMode");
    return savedValue !== null ? JSON.parse(savedValue) : true;
  });

  const [profile, setProfile] = useState(() => {
    const savedValue = localStorage.getItem("profile");
    return savedValue !== null ? savedValue : "";
  });

  const [nickname, setNickname] = useState(() => {
    const savedValue = localStorage.getItem("nickname");
    return savedValue !== null ? savedValue : "";
  });

  const [first, setFirst] = useState(() => {
    const savedValue = localStorage.getItem("first");
    return savedValue !== null ? JSON.parse(savedValue) : true;
  });

  useEffect(() => {
    /* state의 값이 변경될 때마다 localStorage 값 또한 변경 */
    localStorage.setItem("autoMode", JSON.stringify(autoMode));
    localStorage.setItem("profile", profile);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("first", JSON.stringify(first));
  }, [autoMode, profile, nickname, first]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Starting Game Page */}
            <Route
              index
              element={
                <Start
                  setAutoMode={setAutoMode}
                  setProfile={setProfile}
                  nickname={nickname}
                  setNickname={setNickname}
                  first={first}
                  setFirst={setFirst}
                />
              }
            />
            {/* Running Game Layout */}
            <Route
              path="main"
              element={
                <MainLayout
                  emptyBoard={emptyBoard}
                  autoMode={autoMode}
                  profile={profile}
                  nickname={nickname}
                  first={first}
                />
              }
            />
          </Route>
          {/* 설정한 path가 아닐 경우, Error 페이지로 이동 */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
