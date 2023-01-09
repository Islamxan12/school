import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main, Navbar } from "./components";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;