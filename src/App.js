import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./comps/Navigation";
import Main from "./comps/main";
import LoginLanding from "./comps/LoginLanding";

export default function App() {
  const location = useLocation();
  const showNav = location.pathname !== '/';

  return (
    <>
      {showNav && <Navigation />}
      <Routes>
        <Route path="/" element={<LoginLanding />} />
        <Route path="/home" element={<Main />} />
      </Routes>
    </>
  );
}
