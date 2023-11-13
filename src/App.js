import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Error from "./pages/Error";
import Start from "./pages/Start";
import MainLayout from "./layouts/MainLayout";
function App() {
  const [autoMode, setAutoMode] = useState(true); // mode
  const [profile, setProfile] = useState(""); // profile
  const [nickname, setNickname] = useState(""); // nickname
  const [first, setFirst] = useState(true); // first

  // [임시] 출력용
  // useEffect(() => {
  //   console.log(autoMode);
  //   console.log(profile);
  //   console.log(nickname);
  //   console.log(turn);
  // }, [autoMode, profile, nickname, turn]);

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
                  setFirst={setFirst}
                />
              }
            />
            {/* Running Game Layout */}
            <Route
              path="main"
              element={
                <MainLayout
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
